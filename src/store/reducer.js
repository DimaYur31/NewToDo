export const actionTypes = {
	ADD: 'add',
	DELETE: 'delete,',
	COMPLITE: 'complite',
	EDIT: 'edit',
	COPY: 'copy',
}

export const toDoReducer = (state, action) => {
	switch (action.type) {
		case actionTypes.ADD:
		case actionTypes.EDIT:
			return [
				...state,
				{
					id: Date.now(),
					text: action.payload,
					complited: false
				}
			];

		case actionTypes.COMPLITE:
			return state.map(item => {
				if (item.id !== action.payload) return item;

				return {
					...item,
					complited: !item.complited
				}
			})


		case actionTypes.COPY:
			return [
				...state,
				{
					id: Date.now(),
					text: action.payload,
					complited: false
				}
			]

		case actionTypes.DELETE:
			return state.filter(item => item.id !== action.payload)

		default: return state;
	}
}

// --------------------------selectors
export const selectTasks = (state) => state.filter(item => item.complited === false);
export const selectTasksComplited = (state) => state.filter(item => item.complited === true);