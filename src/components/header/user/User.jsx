import iconUser from '../../../images/image1.png';
import vector from '../../../images/Vector.png';
import style from './user.module.scss';

export const User = () => {
	return (
		<div className={style.user}  >
			<h4>Leanne Graham</h4>

			<img src={iconUser} alt='user' />

			<span>
				<img src={vector} className={style.vector} alt='arrow' />
			</span>
		</div>
	)
}
