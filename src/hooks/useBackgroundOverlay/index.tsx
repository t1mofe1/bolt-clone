import { useEffect, useRef, useState } from 'react';
import { BackgroundContainer } from './styles';

type Props = {
	onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	transitionDurationInSeconds?: number;
};

export function useBackgroundOverlay({ onClick, transitionDurationInSeconds }: Props) {
	const [state, setState] = useState(false);

	const ref = useRef<HTMLDivElement>(null);

	const show = () => {
		if (!ref.current) return;

		console.log('show');

		Object.assign(ref.current.style, { pointerEvents: 'auto', opacity: 0.75 });
	};
	const hide = () => {
		if (!ref.current) return;

		console.log('hide');

		// ref.current.addEventListener('transitionend', () => ref.current && Object.assign(ref.current.style, { pointerEvents: 'none' }), { once: true });

		Object.assign(ref.current.style, { pointerEvents: 'none', opacity: 0 });
	};

	useEffect(() => {
		Object.assign(window, { setBackgroundState: (state: boolean) => setState(state) });
	}, []);

	useEffect(() => {
		console.log({ state });
		state ? show() : hide();
	}, [state]);

	return {
		setOverlayState: (show: boolean) => setState(show),
		overlayState: state,

		container: <BackgroundContainer ref={ref} transitionDurationInSeconds={transitionDurationInSeconds} onClick={onClick} />,
	};
}
