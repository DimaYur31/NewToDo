import { Header } from './components/header/Header';
import { SideBar } from './components/sidebar/SideBar';
import { Content } from './components/content/Content';
import { Layout } from './components/layout/layout';

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