import styled from 'styled-components';
import { BackgroundColors } from '../../utils/Colors';

type Props = {
	transitionDurationInSeconds?: number;
};
export const BackgroundContainer = styled.div<Props>`
	position: absolute;
	top: 0;
	left: 0;

	width: 100%;
	height: 100%;

	background: ${BackgroundColors.Black};

	transition: opacity ${({ transitionDurationInSeconds }) => transitionDurationInSeconds || '0.5'}s;
`;
