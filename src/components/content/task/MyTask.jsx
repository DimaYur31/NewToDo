import { useAppContext } from '../../../store/context';
import { addCompliteAction, deleteAction, copyTaskAction } from '../../../store/actions';
import style from './myTask.module.scss';

export const MyTask = ({ task }) => {
	const { input, dispatch, setEdit } = useAppContext();
	const checked = !task.complited ? `${style.checkbox}` : `${style.complited}`;

	const compliteTask = () => dispatch(addCompliteAction(task.id));

	const deleteTask = () => dispatch(deleteAction(task.id));

	const editTask = () => {
		setEdit({
			id: task.id,
			isEdit: true
		});
		input.setValue(task.text);
	};

	const copyTask = () => dispatch(copyTaskAction(task.text));


	return (
		<div className={style.task} >

			<span
				className={checked}
				onClick={() => { compliteTask(task.id) }}
			/>

			<p className={style.text} >{task.text}</p>

			<div className={style.btns} >
				<button
					className={style.edit}
					onClick={() => { editTask() }}
				/>

				<button
					className={style.copy}
					onClick={() => { copyTask() }}
				/>

				<button
					className={style.delete}
					onClick={() => deleteTask()}
				/>

			</div>
		</div>
	)
}