import TaskItem from './TaskItem';
import classes from './TasksList.module.css'
import { Fragment } from 'react';

const TasksList = (props) => {
	if (props.items.length === 0) {
    return <h2 className={classes.fallback}>Нет задач</h2>;
  }
	
	return (
		<Fragment>
			{props.items.map(task => (
				<TaskItem 
				key={task.id}
        title={task.title}
        description={task.description}
        date={task.date}
      	/>
			))}
		</Fragment>
	);
};

export default TasksList;