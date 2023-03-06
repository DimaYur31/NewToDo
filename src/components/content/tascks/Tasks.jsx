import { useCallback } from 'react';
import { MyTask } from '../task/MyTask';
import { selectTasksComplited, selectTasks } from '../../../store/reducer';
import { Total } from '../total/Total';
import style from './tasks.module.scss';

export const Tasks = ({ tasks }) => {
	const complite = selectTasksComplited(tasks)
	const notComplite = selectTasks(tasks)

	const renderList = useCallback((tasks) => {
		return tasks.map(task => {
			return <MyTask
				task={task}
				key={task.id}
			/>
		})
	}, [tasks])

	return (
		<div className={style.wrapper}>
			<div className={style.list}>

				<Total value={`To-Do ${notComplite.length}`} />
				<div>{renderList(notComplite)}</div>
			</div>

			<div className={style.list}>

				<span>
					<Total value={`Complited ${complite.length}`} />
				</span>

				<div>{renderList(complite)}</div>
			</div>
		</div>
	)
}