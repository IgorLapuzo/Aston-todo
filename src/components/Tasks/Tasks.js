import { Component, Fragment } from 'react';
import TasksFilter from './TasksFilter';
import TasksList from './TasksList';
import classes from './Tasks.module.css';


class Tasks extends Component {
  constructor() {
    super();
    this.state={
      filteredGroup: 'all',
    }
  }

  filterChangeHandler = (selectedGroup) => {
    this.setState({filteredGroup: selectedGroup});
  };

  render() {
    return (
      <Fragment>
        <div className={classes.tasks}>
          <TasksFilter
            selected={this.state.filteredGroup}
            onChangeFilter={this.filterChangeHandler.bind(this)}
          />
          <TasksList 
            onActiveChangeHandler={this.props.onActiveChangeHandler}
            items={this.props.items.filter((task) => {
              if (this.state.filteredGroup === 'all') {
                return true
              };
              return task.status === this.state.filteredGroup;
            })} />
        </div>
      </Fragment> 
    )
  }
};

export default Tasks;
