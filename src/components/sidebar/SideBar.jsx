import menu from '../../images/Vector.svg'
import style from './sideBar.module.scss'

export const SideBar = () => {
	return (
		<div className={style.sideBar} >
			<span >
				<img src={menu} alt="menu" />
			</span>
		</div>
	)
}