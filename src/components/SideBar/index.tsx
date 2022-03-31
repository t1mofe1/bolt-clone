import { useState } from 'react';
import { useBackgroundOverlay } from '../../hooks/useBackgroundOverlay';
import { BurgerMenu } from './BurgerMenu';
import { SideBarMenu } from './SideBarMenu';
import { SideBarContainer } from './styles';

export function SideBar() {
	const [menuOpened, setMenuOpened] = useState(false);

	const clickHandler = (state: boolean) => {
		setMenuOpened(state);
		setOverlayState(state);
	};

	const { container: BackgroundOverlay, setOverlayState } = useBackgroundOverlay({
		onClick: () => clickHandler(false),
		transitionDurationInSeconds: 0.3,
	});

	return (
		<SideBarContainer>
			{BackgroundOverlay}
			<BurgerMenu onClick={() => clickHandler(true)} />
			<SideBarMenu menuOpened={menuOpened} />
		</SideBarContainer>
	);
}
