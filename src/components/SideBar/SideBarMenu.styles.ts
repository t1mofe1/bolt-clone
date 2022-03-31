import styled from 'styled-components';

export const SideBarContainer = styled.div<{ menuOpened: boolean }>`
	position: absolute;
	top: 0;
	left: 0;

	width: calc(100% - 50px);
	height: 100%;

	display: flex;
	flex-direction: column;

	background: #fff;

	transition: transform 0.25s;
	transform: translateX(-115%);
	${({ menuOpened }) => menuOpened && `transform: translateX(0);`}
`;
