import style from './input.module.scss';

export const Input = ({ value, onChange, clear }) => {

	return (
		<div className={style.wrapper}>
			<input
				value={value}
				onChange={e => onChange(e)}
				type="text"
				placeholder="+ Add a task, press Enter to save"
			/>
			<span
				onClick={() => clear()}
			></span>
		</div>
	)
}