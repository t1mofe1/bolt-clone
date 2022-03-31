import { useState, useEffect } from 'react';

export function Marker(options: google.maps.MarkerOptions) {
	const [marker, setMarker] = useState<google.maps.Marker>();

	useEffect(() => {
		if (!marker) {
			setMarker(new google.maps.Marker());
		}

		// remove marker from map on unmount
		return () => {
			marker?.setMap(null);
		};
	}, [marker]);

	useEffect(() => {
		marker?.setOptions(options);
	}, [marker, options]);

	return null;
}
