import { requestRoute } from '@/apis/courseFeature';
import { iconMap, IGubunType } from '@/utils/iconMap';
import { ISpotType } from '@/stores/recommendedCourse/type';
import { findNowLocation } from '@/utils/map';

export const useMap = (map: any) => {
  let drawInfoArr: any[] = [];
  let resultdrawArr: any[] = [];
  let markers: any[] = [];

  const Tmapv2 = (window as any).Tmapv2;

  const adjustZoomLevelToFitRoute = (drawInfoArr: any[]) => {
    if (drawInfoArr.length > 0) {
      const bounds = new Tmapv2.LatLngBounds();

      drawInfoArr.forEach((point: any) => {
        bounds.extend(point);
      });

      map.value.fitBounds(bounds);
    } else {
      console.error('Zoom 조정할 경로 데이터가 부족합니다.');
    }
  };

  const createPolylineSegment = (
    segmentPath: any[],
    color: string,
    weight: number
  ) => {
    return new Tmapv2.Polyline({
      path: segmentPath,
      strokeColor: color,
      strokeWeight: weight,
      fillOpacity: 1.0,
      map: map.value,
      direction: true,
      directionColor: 'white',
    });
  };

  const clearRoute = () => {
    if (resultdrawArr.length > 0) {
      resultdrawArr.forEach((line) => {
        if (line && typeof line.setVisible === 'function') {
          line.setVisible(false);
        }
      });
      resultdrawArr = [];
    }
  };

  const clearMarkers = () => {
    markers.forEach((marker) => marker.setMap(null));
    markers = [];
  };

  const drawLine = (arrPoint: any[]) => {
    const totalPoints = arrPoint.length;
    const SEGMENT_WEIGHTS = 10;
    const SEGMENT_COLORS = [
      '#75FFA5',
      '#22F779',
      '#13D168',
      '#07AB56',
      '#008545',
    ];

    SEGMENT_COLORS.forEach((color, index) => {
      const start = Math.floor(totalPoints * (index * 0.2));
      const end = Math.floor(totalPoints * ((index + 1) * 0.2));

      const segmentPath = arrPoint.slice(start, end + 1);
      const polyline = createPolylineSegment(
        segmentPath,
        color,
        SEGMENT_WEIGHTS
      );

      resultdrawArr.push(polyline);
    });

    adjustZoomLevelToFitRoute(arrPoint);
  };

  const requestLocationPermission = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve(position);
          },
          (error) => {
            if (error.code === error.PERMISSION_DENIED) {
              alert(
                '위치 권한이 거부되었습니다. 앱 설정에서 권한을 허용해 주세요.'
              );
              reject('위치 권한이 거부되었습니다.');
            } else {
              reject('위치를 가져오는 데 실패했습니다.');
            }
          }
        );
      } else {
        reject('이 브라우저는 위치 서비스를 지원하지 않습니다.');
      }
    });
  };

  const initTmap = (map: any) => {
    return new Promise<void>((resolve, reject) => {
      if (!map.value) {
        map.value = new Tmapv2.Map('map_div', {
          width: '100%',
          height: '100%',
          zoom: 15,
          scaleBar: false,
          zoomControl: false,
          httpsMode: true,
        });
        resolve();
      } else {
        reject('지도 객체 초기화 실패: 이미 초기화된 상태입니다.');
      }
    });
  };

  const removeMarker = (location: ISpotType) => {
    const { latitude, longitude } = location;
    if (!map.value || latitude === 0 || longitude === 0) return;

    const markerIndex = markers.findIndex(
      (marker) =>
        marker.getPosition().lat() === latitude &&
        marker.getPosition().lng() === longitude
    );

    if (markerIndex !== -1) {
      markers[markerIndex].setMap(null);
      markers.splice(markerIndex, 1);
    } else {
      console.log('해당 위치에 마커가 없습니다.');
    }
  };

  const checkDuplMarker = (location: ISpotType): boolean => {
    const { latitude, longitude } = location;
    if (!latitude || !longitude || !map.value) return false;

    return markers.some(
      (marker) =>
        marker.getPosition().lat() === latitude &&
        marker.getPosition().lng() === longitude
    );
  };

  const addMarker = (location: ISpotType, gubun: IGubunType) => {
    const { latitude, longitude } = location;
    if (!map.value || latitude === 0 || longitude === 0) return;

    const markerPosition = new Tmapv2.LatLng(latitude, longitude);
    const marker = new Tmapv2.Marker({
      position: markerPosition,
      icon: iconMap[gubun],
      map: map.value,
    });

    markers.push(marker);
    return marker;
  };

  const searchRoutes = async (
    startLocation: ISpotType,
    endLocation: ISpotType,
    passList?: ISpotType[]
  ) => {
    try {
      clearRoute();

      const passListString = passList
        ? passList
            .map((point) => `${point.longitude},${point.latitude}`)
            .join('_')
        : '';

      const resultData = await requestRoute(
        String(startLocation.longitude),
        String(startLocation.latitude),
        String(endLocation.longitude),
        String(endLocation.latitude),
        passListString
      );

      drawInfoArr = [];

      resultData.forEach((data: any) => {
        const geometry = data.geometry;
        const properties = data.properties;

        if (geometry.type === 'LineString') {
          geometry.coordinates.forEach((coord: any) => {
            const latlng = new Tmapv2.Point(coord[0], coord[1]);
            const convertPoint =
              Tmapv2.Projection.convertEPSG3857ToWGS84GEO(latlng);
            const convertChange = new Tmapv2.LatLng(
              convertPoint._lat,
              convertPoint._lng
            );
            drawInfoArr.push(convertChange);
          });
        }
      });

      drawLine(drawInfoArr);
    } catch (error) {
      console.error('경로 검색 중 오류 발생:', error);
    }
  };

  const searchRoutesTest = async (map: any) => {
    const startLocation: [number, number] = [
      33.433944015499456, 126.43602130714433,
    ];
    const endLocation: [number, number] = [
      33.45120886113757, 126.48765563964844,
    ];
    const passList =
      '126.39573248492509,33.47190207955216_126.44226001173622,33.47486469122896_126.42766879469521,33.48001928930712';

    try {
      const resultData = await requestRoute(
        String(startLocation[1]),
        String(startLocation[0]),
        String(endLocation[1]),
        String(endLocation[0]),
        passList
      );

      if (resultdrawArr.length > 0) {
        resultdrawArr.forEach((line) => line.setMap(null));
        resultdrawArr = [];
      }

      drawInfoArr = [];

      resultData.forEach((data: any) => {
        const geometry = data.geometry;
        const properties = data.properties;

        if (geometry.type === 'LineString') {
          geometry.coordinates.forEach((coord: any) => {
            const latlng = new Tmapv2.Point(coord[0], coord[1]);
            const convertPoint =
              Tmapv2.Projection.convertEPSG3857ToWGS84GEO(latlng);
            const convertChange = new Tmapv2.LatLng(
              convertPoint._lat,
              convertPoint._lng
            );
            drawInfoArr.push(convertChange);
          });
        } else if (
          properties.pointType !== 'GP' &&
          properties.pointType.includes('PP')
        ) {
          const latlon = new Tmapv2.Point(
            geometry.coordinates[0],
            geometry.coordinates[1]
          );
          const convertPoint =
            Tmapv2.Projection.convertEPSG3857ToWGS84GEO(latlon);

          new Tmapv2.Marker({
            position: new Tmapv2.LatLng(convertPoint._lat, convertPoint._lng),
            icon: iconMap['location'],
            map: map.value,
          });
        }
      });
      drawLine(drawInfoArr);
    } catch (error) {
      console.error('경로 검색 중 오류 발생:', error);
    }
  };

  const moveLocation = (latitude: number, longitude: number) => {
    if (!map.value) return;

    if (!isNaN(latitude) && !isNaN(longitude)) {
      const currentLocation = new Tmapv2.LatLng(latitude, longitude);
      map.value.setCenter(currentLocation);
      map.value.setZoom(15);
    } else {
      console.error('유효하지 않은 좌표:', latitude, longitude);
    }
  };

  const moveNowLocation = async () => {
    try {
      const position: any = await requestLocationPermission();
      const { latitude, longitude } = position.coords;

      const markerPosition = new Tmapv2.LatLng(latitude, longitude);
      new Tmapv2.Marker({
        position: markerPosition,
        icon: iconMap['now'],
        map: map.value,
      });

      moveLocation(latitude, longitude);
    } catch (error) {
      console.error(error);
      alert('현재 위치를 가져오는 데 실패했습니다.');

      const defaultLatitude = 33.50712081595116;
      const defaultLongitude = 126.49340629577637;
      moveLocation(defaultLatitude, defaultLongitude);
    }
  };

  return {
    initTmap,
    removeMarker,
    searchRoutes,
    addMarker,
    clearMarkers,
    checkDuplMarker,
    moveLocation,
    moveNowLocation,
    searchRoutesTest,
  };
};
