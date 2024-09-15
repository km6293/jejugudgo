import { getReverseGeocoding } from '@/apis/courseFeature';

export const findNowLocation = (): Promise<[number, number, string]> => {
  return new Promise((resolve, reject) => {
    const success = async (position: GeolocationPosition) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log('현재 위치:', latitude, longitude);

      try {
        const address = await getReverseGeocoding(latitude, longitude);

        console.log('현재 주소:', address);
        resolve([latitude, longitude, address]);
      } catch (error) {
        console.error('Reverse Geocoding 에러:', error);
        reject(error);
      }
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
