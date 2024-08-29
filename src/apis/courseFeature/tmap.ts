import axios from 'axios';

export const requestRoute = async (
  startX: string,
  startY: string,
  endX: string,
  endY: string,
  passList: string,
  startName = '출발지',
  endName = '도착지'
) => {
  const headers = {
    appKey: process.env.VUE_APP_MAP_API,
  };

  try {
    const response = await axios.post(
      'https://apis.openapi.sk.com/tmap/routes/pedestrian?version=1&format=json',
      {
        startX,
        startY,
        endX,
        endY,
        passList,
        reqCoordType: 'WGS84GEO',
        resCoordType: 'EPSG3857',
        startName,
        endName,
      },
      { headers }
    );

    return response.data.features;
  } catch (error) {
    console.error('경로를 가져오는 중 오류 발생:', error);
    throw error;
  }
};
