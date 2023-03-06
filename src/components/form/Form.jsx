import { Input } from '../Ui/input/Input'
import { Button } from '../Ui/button/Button'
import style from './form.module.scss';
import { addTaskAction, editTaskAction } from '../../store/actions';
import { useAppContext } from '../../store/context';

export const Form = () => {
	const { input, edit, setEdit, dispatch } = useAppContext()
	const { value, onChange, clear } = input;

	const addTask = (e) => {
		e.preventDefault();

		edit.isEdit
			? dispatch(editTaskAction(edit.id, value))
			: dispatch(addTaskAction(value))

		setEdit({
			id: null,
			isEdit: false
		})

		clear()
	}

	const clearForm = () => {
		setEdit({
			id: null,
			isEdit: false
		})

		clear()
	}

	return (
		<form className={style.form}>
			<Input
				value={value}
				onChange={onChange}
				clear={clearForm}
			/>

			<Button onClick={e => addTask(e)}>
				{!edit.isEdit ? 'Add' : 'Save'}
			</Button>
		</form>
	)
}