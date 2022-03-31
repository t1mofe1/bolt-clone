export enum IconStyle {
	Solid = 'fa-solid',
	Regular = 'fa-regular',
	Light = 'fa-light',
	Thin = 'fa-thin',
	Duotone = 'fa-duotone',
	Brands = 'fa-brands',
}

export enum Icons {
	Search = 'magnifying-glass',
	Burger = 'bars',
	BankCard = 'credit-card',
	Promo = 'tag',
	Clock = 'clock',
	Work = 'briefcase',
	Chat = 'message-dots',
	About = 'circle-info',
	Food = 'utensils',
	Scooter = 'moped',
	Drive = 'steering-wheel',
	User = 'user',
}

export type IconProps = {
	style?: IconStyle;
	name: Icons | string;
};

export function Icon({ name, style }: IconProps) {
	if (!style) style = IconStyle.Solid;

	return <i className={`${style} fa-${name}`} />;
}
