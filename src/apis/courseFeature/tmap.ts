import axios from 'axios';

export const requestRoute = async (
  startX: string,
  startY: string,
  endX: string,
  endY: string,
  passList?: string,
  startName = '출발지',
  endName = '도착지'
) => {
  const headers = {
    appKey: process.env.VUE_APP_MAP_API,
  };

  try {
    const data: Record<string, any> = {
      startX,
      startY,
      endX,
      endY,
      reqCoordType: 'WGS84GEO',
      resCoordType: 'EPSG3857',
      startName,
      endName,
    };

    if (passList && passList.trim() !== '') {
      data.passList = passList;
    }

    const response = await axios.post(
      'https://apis.openapi.sk.com/tmap/routes/pedestrian?version=1&format=json',
      data,
      { headers }
    );

    return response.data.features;
  } catch (error) {
    console.error('경로를 가져오는 중 오류 발생:', error);
    throw error;
  }
};

export const getReverseGeocoding = async (
  latitude: number,
  longitude: number
): Promise<string> => {
  try {
    const response = await axios.get(
      `https://apis.openapi.sk.com/tmap/geo/reversegeocoding?version=1&lat=${latitude}&lon=${longitude}&format=json&appKey=${process.env.VUE_APP_MAP_API}`
    );
    const data = response.data;
    const address = data?.addressInfo?.fullAddress || '';

    return address;
  } catch (error) {
    console.error('Reverse Geocoding 에러:', error);
    throw error;
  }
};

export const searchPlaces = async (keyword: string) => {
  const headers = {
    appKey: process.env.VUE_APP_MAP_API, // TMap API 키
  };

  try {
    const response = await axios.get(
      `https://apis.openapi.sk.com/tmap/pois?version=1&format=json&searchKeyword=${encodeURIComponent(
        keyword
      )}&resCoordType=WGS84GEO&reqCoordType=WGS84GEO&count=10`,
      { headers }
    );

    return response.data.searchPoiInfo.pois.poi.map((poi: any) => ({
      name: poi.name,
      latitude: poi.frontLat,
      longitude: poi.frontLon,
      address: poi.newAddressList.newAddress[0]?.fullAddress || poi.address,
    }));
  } catch (error) {
    console.error('장소 검색 중 오류 발생:', error);
    throw error;
  }
};
