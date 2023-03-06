import logo from '../../../images/logo.svg'
import style from './logo.module.scss'

export const Logo = () => {
	return (
		<div className={style.box}>
			<img src={logo} alt="logo" />
			<p>To-Do</p>
		</div>
	)
}