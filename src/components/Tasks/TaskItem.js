import { Fragment } from 'react';
import Date from '../UI/Date';
import classes from './TaskItem.module.css'

const TaskItem = props => {

	const onPassId = () => {
		props.onActiveChangeHandler(props.id)
	}

	return (
	<Fragment>
			<div className={classes['task-item']} onClick={onPassId}>
				<div className={classes.container}>
					<h3>{props.title}</h3>
					<p>{props.description}</p>
				</div>
				<Date date={props.date}/>
			</div>
	</Fragment>
	)
}

export default TaskItem; 