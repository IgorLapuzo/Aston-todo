import { useState } from 'react';
import TasksFilter from './TasksFilter';
import TasksList from './TasksList';
import classes from './Tasks.module.css';

const Tasks = (props) => {
  const [filteredGroup, setFilteredGroup] = useState('all');

  const filterChangeHandler = (selectedGroup) => {
    setFilteredGroup(selectedGroup);
  };

  const filteredTasks = props.items.filter((task) => {
    if (filteredGroup === 'all') {
      return true
    };
    return task.status === filteredGroup;
  });

  return (
      <div className={classes.tasks}>
        <TasksFilter
          selected={filteredGroup}
          onChangeFilter={filterChangeHandler}
        />
        <TasksList items={filteredTasks} />
      </div>
  );
};

export default Tasks;
