import { useEffect, useState } from 'react';

export function useUserLocation() {
	const [userLocation, setUserLocation] = useState<GeolocationPosition>();
	const [error, setError] = useState<GeolocationPositionError>();

	useEffect(() => {
		const watchId = navigator.geolocation.watchPosition(
			(position) => setUserLocation(position),
			(error) => setError(error),
			{
				enableHighAccuracy: true,
				timeout: 5000,
				maximumAge: 0,
			},
		);

		return () => navigator.geolocation.clearWatch(watchId);
	}, []);

	return { userLocation, error };
}
