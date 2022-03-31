import { Container, Title, Subtitle } from './styles';
import { Colors, BackgroundColors } from '../../utils/Colors';

type ButtonProps = {
	bgColor?: BackgroundColors;
	textColor?: Colors;
	title: string;
	subtitle?: string;

	style?: React.CSSProperties;
};
export function Button({ bgColor, textColor, title, subtitle, style }: ButtonProps) {
	if (!bgColor) bgColor = BackgroundColors.Black;
	if (!textColor) textColor = Colors.White;

	return (
		<Container bgColor={bgColor} style={style}>
			<Title color={textColor}>{title}</Title>
			{subtitle && <Subtitle color={textColor}>{subtitle}</Subtitle>}
		</Container>
	);
}
