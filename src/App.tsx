import { BottomBar } from './components/BottomBar';
import { SideBar } from './components/SideBar';
import { BoltMap } from './components/BoltMap';
import { MainContainer } from './styles';

function App() {
	return (
		<>
			<MainContainer>
				<BoltMap />
				<BottomBar />
			</MainContainer>
			<SideBar />
		</>
	);
}

export default App;
