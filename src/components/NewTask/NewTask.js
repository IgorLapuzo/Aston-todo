import { useState } from 'react';
import TaskForm from './TaskForm';
import classes from './NewTask.module.css';
import Button from '../UI/Button';


const NewTask = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const saveTaskDataHandler = (enteredTaskData) => {
    const taskData = {
      ...enteredTaskData,
      id: Math.random().toString(),
    };
    props.onAddTask(taskData);
    setIsEditing(false);
  };

	const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

	return (
		<div className={classes['new-task']}>
			{!isEditing && (
        <Button onClick={startEditingHandler}>Добавить новую задачу</Button>
      )}
			{isEditing && (
        <TaskForm
          onSaveTaskData={saveTaskDataHandler}
          onCancel={stopEditingHandler}
        />
      )} 
		</div>
	);
};

export default NewTask;