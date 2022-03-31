import styled from 'styled-components';
import { BackgroundColors } from '../../utils/Colors';
import { IconContainer, MenuItemContainer, Title } from '../Menu/MenuItem.styles';

export const ProfileContainer = styled(MenuItemContainer)`
	border-bottom: 1px solid #e6e6e6;

	transition: background 0.25s;

	cursor: pointer;

	&:active {
		background-color: ${BackgroundColors.LightGrey};
	}
`;

export const ProfilePictureContainer = styled(IconContainer)`
	width: 45px;

	border-radius: 50%;

	background: ${BackgroundColors.LightGrey};
`;

export const ProfilePicture = styled.img``;

export const ProfileName = styled(Title)`
	font-weight: 700;
`;
