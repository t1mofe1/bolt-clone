import styled from 'styled-components';
import { Title as TitleOrig, Subtitle as SubtitleOrig } from '../Menu/MenuItem.styles';
import { BackgroundColors } from '../../utils/Colors';

type ContainerProps = {
	bgColor: BackgroundColors;
};
export const Container = styled.button<ContainerProps>`
	background-color: ${({ bgColor }) => bgColor};

	border: none;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	cursor: pointer;

	gap: 2.5px;

	padding: 7.5px 10px;

	border-radius: 5px;
`;

export const Title = styled(TitleOrig)`
	font-weight: bold;
	font-size: 0.7rem;
`;

export const Subtitle = styled(SubtitleOrig)`
	font-size: 0.65rem;
`;
