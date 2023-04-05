import { Component, createRef, Fragment } from 'react';
import ErrorModal from '../UI/ErrorModal';
import Button from '../UI/Button';
import classes from './TaskForm.module.css';

class TaskForm extends Component {
	constructor(props) {
		super(props) 
		this.titleInputRef = createRef();
		this.descriptionInputRef = createRef();
		this.dateInputRef = createRef();
		this.timeInputRef = createRef();
		this.state={
      errorTitle: '',
      errorMessage: '',
    }
	}
	
	submitHandler = (event) => {
    event.preventDefault();
		const enteredTitle = this.titleInputRef.current.value
		const enteredDescription = this.descriptionInputRef.current.value
		const enteredDate = this.dateInputRef.current.value
		const enteredTime = this.timeInputRef.current.value

		if (enteredTitle.trim().length < 2) {
			this.setState({
				errorTitle: 'Ошибка ввода',
				errorMessage: 'Длина заголовка не может быть меньше 2 символов'
			})
			return;
		}

		const taskData = {
      title: enteredTitle,
      description: enteredDescription,
      date: new Date(`${enteredDate} ${enteredTime}`),
			status: 'active',
    };
		
		this.props.onSaveTaskData(taskData);
		this.titleInputRef.current.value = ''
		this.descriptionInputRef.current.value = ''
		this.dateInputRef.current.value = ''
		this.timeInputRef.current.value = ''
  };	

	errorHandler = () => {
		this.setState({
			errorTitle: '',
			errorMessage: '',
		})
	}

	render() {
		return (
			<Fragment>
				{this.state.errorMessage && (
					<ErrorModal 
						errorTitle = {this.state.errorTitle} 
						errorMessage = {this.state.errorMessage}
						onConfirm={this.errorHandler.bind(this)}
					/>
				)}
				<form onSubmit={this.submitHandler.bind(this)}>
					<div className={classes.controls}>
						<div className={classes.control}>
							<label>Заголовок*</label>
							<input 
								required
								type='text'
								ref= {this.titleInputRef}
							/>
						</div>
						<div className={classes.control}>
							<label>Описание</label>
							<input 
								type='text'
								ref= {this.descriptionInputRef}
							/>
						</div>
						<div className={classes.control}>
							<label>Дата*</label>
							<input 
								required
								type='date' 
								min='2019-01-01' 
								max='2025-12-31'
								ref= {this.dateInputRef}
							/>
						</div>
						<div className={classes.control}>
							<label>Время</label>
							<input 
								type='time' 
								ref= {this.timeInputRef}
							/>
						</div>
					</div>
					<div className={classes.actions}>
						<Button type='button' onClick={this.props.onCancel}>Отмена</Button>
						<Button type='submit' onSubmit={this.props.onSaveTaskData}>Добавить задачу</Button>
					</div>
				</form>
			</Fragment>
		);
	}
};

export default TaskForm;