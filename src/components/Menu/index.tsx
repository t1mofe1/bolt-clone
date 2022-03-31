import { MenuContainer } from './styles';

type MenuProps = {
	children: React.ReactNode;
	style?: React.CSSProperties;
};

export function Menu({ children, style }: MenuProps) {
	return <MenuContainer style={style}>{children}</MenuContainer>;
}
