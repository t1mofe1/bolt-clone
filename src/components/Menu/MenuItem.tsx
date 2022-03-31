import { Icon, Icons, IconStyle } from '../Icon';
import { IconContainer, MenuItemContainer, Row, Subtitle, Title } from './MenuItem.styles';

type MenuItemProps = {
	icon?: Icons;
	title: string;
	subtitle?: string;
};

export function MenuItem({ icon, title, subtitle }: MenuItemProps) {
	return (
		<MenuItemContainer>
			{icon && (
				<IconContainer>
					<Icon style={IconStyle.Regular} name={icon} />
				</IconContainer>
			)}
			<Row>
				<Title>{title}</Title>
				{subtitle && <Subtitle>{subtitle}</Subtitle>}
			</Row>
		</MenuItemContainer>
	);
}
