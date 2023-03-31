import { useState } from 'react';
import classes from './TaskForm.module.css';
import Button from '../UI/Button';

const TaskForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
	const [enteredTime, setEnteredTime] = useState('');

	const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

	const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

	const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);	
  };
	
	const timeChangeHandler = (event) => {
    setEnteredTime(event.target.value);	
  };

	const submitHandler = (event) => {
    event.preventDefault();
		const taskData = {
      title: enteredTitle,
      description: enteredDescription,
      date: new Date(`${enteredDate} ${enteredTime}`),
    };
		
		props.onSaveTaskData(taskData);
    setEnteredTitle('');
    setEnteredDescription('');
    setEnteredDate('');
		setEnteredTime('');
  };	

	return (
		<form onSubmit={submitHandler}>
			<div className={classes.controls}>
				<div className={classes.control}>
					<label>Заголовок</label>
					<input 
						type='text'
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className={classes.control}>
					<label>Описание</label>
					<input 
						type='text'
						value={enteredDescription}
            onChange={descriptionChangeHandler}
					/>
				</div>
				<div className={classes.control}>
					<label>Дата</label>
					<input 
						type='date' 
						min='2019-01-01' 
						max='2025-12-31'
						value={enteredDate}
            onChange={dateChangeHandler}
					/>
				</div>
				<div className={classes.control}>
					<label>Время</label>
					<input 
						type='time' 
						value={enteredTime}
            onChange={timeChangeHandler}
					/>
				</div>
			</div>
			<div className={classes.actions}>
				<Button type='button' onClick={props.onCancel}>Отмена</Button>
				<Button type='submit' onSubmit={props.onSaveTaskData}>Добавить задачу</Button>
			</div>
		</form>
	);
};

export default TaskForm;