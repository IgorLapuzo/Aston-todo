import { Component } from 'react';
import TasksFilter from './TasksFilter';
import TasksList from './TasksList';
import classes from './Tasks.module.css';

class Tasks extends Component {
  constructor() {
    super();
    this.state={
      filteredGroup: 'active',
    }
  }

  filterChangeHandler = (selectedGroup) => {
    this.setState({filteredGroup: selectedGroup});
  };

  render() {
    return (
      <div className={classes.tasks}>
        <TasksFilter
          selected={this.state.filteredGroup}
          onChangeFilter={this.filterChangeHandler.bind(this)}
        />
        <TasksList items={this.props.items.filter((task) => {
          if (this.state.filteredGroup === 'all') {
            return true
          };
          return task.status === this.state.filteredGroup;
        })} />
      </div>
    )
  }
};

export default Tasks;
