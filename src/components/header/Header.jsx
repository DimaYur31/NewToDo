import { Logo } from './logo/Logo';
import { User } from './user/User';
import style from './header.module.scss';

export const Header = () => {
	return (
		<header className={style.header}>
			<Logo />
			<h2>Tasks</h2>
			<User />
		</header>
	)
}