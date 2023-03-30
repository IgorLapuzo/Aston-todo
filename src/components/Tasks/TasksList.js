import TaskItem from './TaskItem';
import Card from '../UI/Card';
import classes from './TasksList.module.css'

const TasksList = (props) => {
	if (props.tasks.length === 0) {
    return <h2 className={classes.fallback}>Нет задач</h2>;
  }
	
	return (
		<Card className={classes.tasks}>
			{props.tasks.map(task => (
				<TaskItem 
				key={task.id}
        createdDate={task.createdDate}
        title={task.taskTitle}
        description={task.taskDescription}
        expiredDate={task.expiredDate}
      	/>
			))}
		</Card>
	)
}

export default TasksList;