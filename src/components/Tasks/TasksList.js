import TaskItem from './TaskItem';
import Card from '../UI/Card';
import classes from './TasksList.module.css'

const TasksList = (props) => {
	return (
		<Card className={classes.tasks}>
			<TaskItem 
        createdDate={props.tasks[0].createdDate}
        title={props.tasks[0].taskTitle}
        description={props.tasks[0].taskDescription}
        expiredDate={props.tasks[0].expiredDate}
      />
		</Card>
	)
}

export default TasksList;