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
