import { Wrapper, Status } from '@googlemaps/react-wrapper';
import React, { useEffect, useRef, useState } from 'react';
import { useUserLocation } from '../../hooks/useUserLocation';
import { Container } from './styles';
import Config from '../../Config.json';
import { useCars } from '../../hooks/useCars';
import { Map } from './Map';
import { Marker } from './Marker';

export function BoltMap() {
	// const cars = useCars({ category: 'all', type: 'available' });

	const [mapContainer, setMapContainer] = useState<HTMLDivElement>();
	const [mapInstance, setMapInstance] = useState<google.maps.Map>();

	const [zoom, setZoom] = useState(15);
	const [center, setCenter] = useState<google.maps.LatLngLiteral>({ lat: 59.4328402, lng: 24.7439894 });

	const { userLocation, error } = useUserLocation(); // get user location
	useEffect(() => {
		if (!userLocation) return;

		const { latitude: lat, longitude: lng } = userLocation.coords;
		setCenter({ lat, lng });
	}, [userLocation]); // update center if user location changes

	const centerMap = () => {
		setCenter(center);
	};

	return (
		<Wrapper apiKey={Config.Google.MapsApiKey} render={(status: Status) => <h1>Status: {status}</h1>}>
			<Map
				setMapInstanceToParent={setMapInstance}
				setMapContainerToParent={setMapContainer}
				mapOptions={{
					zoom,
					center,
					disableDefaultUI: true,
				}}
			>
				{/* {{clicks.map((latLng, i) => (
						<Marker key={i} position={latLng} />
					))}} */}
			</Map>
		</Wrapper>
	);
}
