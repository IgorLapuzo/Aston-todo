import { Fragment } from 'react';
import Date from '../UI/Date';
import classes from './TaskItem.module.css'

const TaskItem = props => {
	return (
	<Fragment>
			<div className={classes['task-item']}>
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