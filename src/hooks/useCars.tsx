import { useState } from 'react';

enum CarCategory {
	Bolt = 'Bolt',
	Basic = 'Basic',
	Electric = 'Electric',
	Premium = 'Premium',
	XL = 'XL',
	ChildSeat = 'ChildSeat',
	Assist = 'Assist',
	Pets = 'Pets',
}

type Props = {
	category?: CarCategory | 'all';
	type?: 'available' | 'busy' | 'all';
};

type Car = {
	type: CarCategory;
	lat: number;
	lng: number;
	busy: boolean;
};

export function useCars({ category, type }: Props) {
	category ??= 'all';
	type ??= 'available';

	const [cars, setCars] = useState<Car[]>([]);

	setCars(
		cars.filter((car) => {
			if ((type === 'available' && car.busy) || (type === 'busy' && !car.busy)) return false;

			return car.type === category || category === 'all';
		}),
	);

	return cars;
}
