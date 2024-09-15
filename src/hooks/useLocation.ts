import { iconMap } from '@/utils/iconMap';

export const useLocation = (mapRef: any) => {
  const Tmapv2 = (window as any).Tmapv2;

  const findNowLocation = (): Promise<[number, number]> => {
    return new Promise((resolve, reject) => {
      const success = (position: GeolocationPosition) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log('현재 위치:', latitude, longitude);
        resolve([latitude, longitude]);
      };

      const error = (err: GeolocationPositionError) => {
        console.error(`ERROR(${err.code}): ${err.message}`);
        reject(err);
      };

      navigator.geolocation.getCurrentPosition(success, error, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      });
    });
  };

  const moveLocation = (
    latitude: number | string,
    longitude: number | string
  ) => {
    if (mapRef.value) {
      const lat =
        typeof latitude === 'string' ? parseFloat(latitude) : latitude;
      const lng =
        typeof longitude === 'string' ? parseFloat(longitude) : longitude;

      if (!isNaN(lat) && !isNaN(lng)) {
        const currentLocation = new Tmapv2.LatLng(lat, lng);
        mapRef.value.setCenter(currentLocation);
        mapRef.value.setZoom(15);
      } else {
        console.error('유효하지 않은 좌표:', latitude, longitude);
      }
    } else {
      console.error('맵 초기화가 되지 않음', 2);
    }
  };

  const moveNowLocation = async (mapRef: any) => {
    if (!mapRef.value) {
      console.error('Map is not initialized');
      return;
    }

    let latitude, longitude;
    try {
      [latitude, longitude] = await findNowLocation();

      const markerPosition = new Tmapv2.LatLng(latitude, longitude);

      const marker = new Tmapv2.Marker({
        position: markerPosition,
        icon: iconMap['now'],
        map: mapRef.value,
      });
    } catch (error) {
      [latitude, longitude] = [33.50712081595116, 126.49340629577637];
      console.error('현재 위치를 찾을 수 없습니다:', error);
    }

    moveLocation(latitude, longitude);
  };

  return {
    findNowLocation,
    moveLocation,
    moveNowLocation,
  };
};
