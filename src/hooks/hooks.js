import { useReducer, useState } from 'react';
import { toDoReducer } from '../store/reducer';

export const useInput = (initialValue = '') => {
	const [value, setValue] = useState(initialValue);

	const onChange = event => setValue(event.target.value);
	const clear = () => setValue('');

	return { value, onChange, clear, setValue };
}

export const useToDoReducer = initialState => {
	const [state, dispatch] = useReducer(toDoReducer, initialState);

	return [state, dispatch];
}