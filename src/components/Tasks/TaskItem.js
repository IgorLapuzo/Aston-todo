import { Fragment } from 'react';
import Date from '../UI/Date';
import classes from './TaskItem.module.css'

const TaskItem = props => {

	const onPassId = () => {
		props.onActiveChangeHandler(props.id)
	}

	const checkStatus = () => {
		switch (props.status) {
			case 'active': return <div className={classes.active}></div> 
			case 'finished': return <div className={classes.finished}></div> 
			case 'archives': return <div className={classes.archives}></div> 
		}
	}
	
	return (
	<Fragment>
			<div className={classes['task-item']} onClick={onPassId}>
			<div>{checkStatus(props.status)}</div>
				<div className={classes.container}>
					{props.status === 'finished' 
						? <h3 className={classes.scratch}>{props.title}</h3> 
						: <h3>{props.title}</h3> 
					}
					<p>{props.description}</p> 
				</div>
				<Date date={props.date}/>
			</div>
	</Fragment>
	)
}

export default TaskItem; 