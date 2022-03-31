import React, { useRef, useState, useEffect } from 'react';
import { MapContainer } from './Map.styles';

type MapProps = {
	setMapInstanceToParent: (map: google.maps.Map) => void;
	setMapContainerToParent: (mapContainer: HTMLDivElement) => void;

	mapOptions: google.maps.MapOptions;

	children: React.ReactNode;
};
export function Map({ children, setMapContainerToParent, setMapInstanceToParent, mapOptions }: MapProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [map, setMap] = useState<google.maps.Map>();

	// set map instance and container to parent
	useEffect(() => {
		ref.current && setMapContainerToParent(ref.current);
		map && setMapInstanceToParent(map);
	}, [map, ref]);

	// initialize map
	useEffect(() => {
		if (ref.current && !map) {
			setMap(new window.google.maps.Map(ref.current, mapOptions));
		}
	}, [ref, map]);

	useEffect(() => {
		map?.setOptions(mapOptions);
	}, [map, mapOptions]);

	return (
		<>
			<MapContainer ref={ref} />
			{React.Children.map(children, (child) => React.isValidElement(child) && React.cloneElement(child, { map }))}
		</>
	);
}
