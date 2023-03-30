import { useState } from 'react';
import classes from './TaskForm.module.css';

const TaskForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

	const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

	const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

	const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

	const submitHandler = (event) => {
    event.preventDefault();
		const taskData = {
      title: enteredTitle,
      description: enteredDescription,
      date: new Date(enteredDate),
    };
		props.onSaveTaskData(taskData);
    setEnteredTitle('');
    setEnteredDescription('');
    setEnteredDate('');
  };	

	return (
		<form onSubmit={submitHandler}>
			<div className={classes.controls}>
				<div className={classes.control}>
					<label>Title</label>
					<input 
						type='text'
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className={classes.control}>
					<label>Description</label>
					<input 
						type='text'
						value={enteredDescription}
            onChange={descriptionChangeHandler}
					/>
				</div>
				<div className={classes.control}>
					<label>Date</label>
					<input 
						type='date' 
						min='2019-01-01' 
						max='2025-12-31'
						value={enteredDate}
            onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className={classes.actions}>
				<button type='button' onClick={props.onCancel}>Отмена</button>
				<button type='submit'>Добавить задачу</button>
			</div>
		</form>
	)
}

export default TaskForm;