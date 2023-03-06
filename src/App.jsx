import { Header } from './components/header/Header';
import { SideBar } from './components/sidebar/SideBar';
import { Content } from './components/content/Content';
import { Layout } from './components/layout/Layout';

export const App = () => {
	return (
		<div className="App">
			<Header />
			<Layout>
				<SideBar />
				<Content />
			</Layout>
		</div>
	)
}