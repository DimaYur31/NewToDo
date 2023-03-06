import style from './button.module.scss'

export const Button = ({ children, ...props }) => {
	return (
		<button {...props} className={style.button}>
			{children}
		</button>
	)
}