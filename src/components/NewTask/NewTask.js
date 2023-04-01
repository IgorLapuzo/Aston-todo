import { Component } from 'react';
import TaskForm from './TaskForm';
import classes from './NewTask.module.css';
import Button from '../UI/Button';


class NewTask extends Component {
  constructor() {
    super();
    this.state={
      isEditing: false,
    }
  }
	
	saveTaskDataHandler = (enteredTaskData) => {
    const taskData = {
      ...enteredTaskData,
      id: Math.random().toString(),
    };
    this.props.onAddTask(taskData);
    this.setState({isEditing: false}) 
  }

	startEditingHandler = () => {
    this.setState({isEditing: true})
  }

  stopEditingHandler = () => {
    this.setState({isEditing: false})
  }

  render() {
    return (
      <div className={classes['new-task']}>
        {!this.state.isEditing && (
          <Button onClick={this.startEditingHandler.bind(this)}>Добавить новую задачу</Button>
        )}
        {this.state.isEditing && (
          <TaskForm
            onSaveTaskData={this.saveTaskDataHandler.bind(this)}
            onCancel={this.stopEditingHandler.bind(this)}
          />
        )} 
      </div>
    )
  }
}

export default NewTask;