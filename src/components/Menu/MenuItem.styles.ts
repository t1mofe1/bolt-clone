import styled from 'styled-components';
import { Colors, BackgroundColors } from '../../utils/Colors';

export const MenuItemContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;

	width: 100%;

	gap: 12.5px;

	padding: 7.5px 12.5px;

	transition: background 0.25s;

	cursor: pointer;

	&:active {
		background: ${BackgroundColors.LightGrey};
	}
`;

export const IconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 25px;
	aspect-ratio: 1;
`;

export const Row = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

type ColorProp = {
	color?: Colors;
};

export const Title = styled.h5<ColorProp>`
	${({ color }) => color && `color: ${color};`}

	font-weight: 400;
	font-size: 0.75rem;
`;

export const Subtitle = styled.span<ColorProp>`
	font-size: 0.7rem;
	color: ${({ color }) => color ?? Colors.DarkWhite};
`;
