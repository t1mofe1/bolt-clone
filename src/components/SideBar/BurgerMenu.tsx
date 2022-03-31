import { Icon, Icons } from '../Icon';
import { BurgerContainer } from './BurgerMenu.styles';

type BurgerMenuProps = {
	onClick: () => void;
};

export function BurgerMenu({ onClick }: BurgerMenuProps) {
	return (
		<BurgerContainer onClick={onClick}>
			<Icon name={Icons.Burger} />
		</BurgerContainer>
	);
}
