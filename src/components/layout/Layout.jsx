import style from './layout.module.scss';

export const Layout = ({ children }) => {
	return (
		<div className={style.layout}>
			{children}
		</div>
	)
}
