import { useState } from 'react';
import { Tasks } from './tascks/Tasks';
import { Total } from './total/Total';
import { useInput, useToDoReducer } from './../../hooks/hooks';
import { AppContextProvider } from '../../store/context';
import { Form } from '../form/Form';
import style from './content.module.scss';
import { useEffect } from 'react';

export const Content = () => {
	const input = useInput('');
	const [state, dispatch] = useToDoReducer(JSON.parse(localStorage.getItem('myToDo')) || []);
	const [edit, setEdit] = useState({
		id: '',
		isEdit: false
	});

	useEffect(() => {
		localStorage.setItem('myToDo', JSON.stringify(state));
		if (state.length === 0) localStorage.removeItem('myToDo')
	}, [state])

	return (
		<AppContextProvider value={{ input, edit, setEdit, dispatch }}>
			<div className={style.wrapper} >
				<Form />
				<Total value={`Total ${state.length}`} />
				<Tasks tasks={state} />
			</div>
		</AppContextProvider>
	)
}