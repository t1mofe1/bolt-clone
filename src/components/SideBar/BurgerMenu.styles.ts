import styled from 'styled-components';
import { Shadows } from '../../utils/Colors';

export const BurgerContainer = styled.button`
	width: 35px;
	aspect-ratio: 1;

	cursor: pointer;

	border: none;
	box-shadow: ${Shadows.Default};

	background: #fff;

	border-radius: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	position: absolute;
	left: 10px;
	top: 25px;
`;
