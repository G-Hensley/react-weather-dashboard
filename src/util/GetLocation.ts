import { Location } from '../types';

export const getLocation = () => {
  return new Promise<Location>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          coords: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        } as Location);
      },
      (error) => {
        reject(error);
      }
    );
  });
};
