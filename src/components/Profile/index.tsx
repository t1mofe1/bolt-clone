import { Icon, Icons } from '../Icon';
import { Row, Subtitle } from '../Menu/MenuItem.styles';
import { ProfileContainer, ProfilePicture, ProfileName, ProfilePictureContainer } from './styles';

type ProfileProps = {
	imageURL?: string;
	name: string;
};

export function Profile({ imageURL, name }: ProfileProps) {
	return (
		<ProfileContainer>
			<ProfilePictureContainer>
				<Icon name={Icons.User} />
				{imageURL && <ProfilePicture src={imageURL} />}
			</ProfilePictureContainer>
			<Row>
				<ProfileName>{name}</ProfileName>
				<Subtitle>Edit profile</Subtitle>
			</Row>
		</ProfileContainer>
	);
}
