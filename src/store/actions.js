import { actionTypes } from './reducer';

export const addTaskAction = (text) => {
	if (!text.trim()) return {};

	return {
		type: actionTypes.ADD,
		payload: text
	};
};

export const addCompliteAction = (id) => {
	return { type: actionTypes.COMPLITE, payload: id };
};

export const deleteAction = (id) => {
	return { type: actionTypes.DELETE, payload: id };
};

export const editTaskAction = (id, text) => {
	return { type: actionTypes.EDIT, payload: { id, text } };
};

export const copyTaskAction = (text) => {
	return { type: actionTypes.COPY, payload: text };
}