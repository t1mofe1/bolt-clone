import { SideBarContainer } from './SideBarMenu.styles';
import { Profile } from '../Profile';
import { Icons } from '../Icon';
import { Menu } from '../Menu';
import { MenuItem } from '../Menu/MenuItem';
import { Button } from '../Button';
import { Colors, BackgroundColors } from '../../utils/Colors';

type SideBarMenuProps = {
	menuOpened: boolean;
};
export function SideBarMenu({ menuOpened }: SideBarMenuProps) {
	return (
		<SideBarContainer menuOpened={menuOpened}>
			<Profile name="Timothy" />
			<Menu>
				<MenuItem icon={Icons.BankCard} title={'Payment'} />
				<MenuItem icon={Icons.Promo} title={'Promotions'} subtitle={'Enter promo code'} />
				<MenuItem icon={Icons.Clock} title={'Ride History'} />
				<MenuItem icon={Icons.Work} title={'Work Rides'} />
				<MenuItem icon={Icons.Chat} title={'Support'} />
				<MenuItem icon={Icons.About} title={'About'} />
			</Menu>
			<Menu style={{ borderTop: `7.5px solid ${BackgroundColors.LightGrey}` }}>
				<MenuItem icon={Icons.Food} title={'Bolt Food'} />
				<MenuItem icon={Icons.Scooter} title={'Bolt Scooters & E-bikes'} />
				<MenuItem icon={Icons.Drive} title={'Bolt Drive'} />
			</Menu>
			<Button style={{ margin: '10px', marginTop: 'auto' }} textColor={Colors.White} bgColor={BackgroundColors.Green} title={'Become a driver'} subtitle={'Earn money on your schedule'} />
		</SideBarContainer>
	);
}
