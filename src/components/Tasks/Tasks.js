import { useState } from 'react';
import Card from '../UI/Card';
import TasksFilter from './TasksFilter';
import TasksList from './TasksList';
import classes from './Tasks.module.css';

const Tasks = (props) => {
  const [filteredGroup, setFilteredGroup] = useState('all');

  const filterChangeHandler = (selectedGroup) => {
    setFilteredGroup(selectedGroup);
  };

  const filteredTasks = props.tasks.filter((task) => {
    if (filteredGroup === 'all') {
      return true
    }
    return task.status === filteredGroup;
  });

  return (
    <div>
      <Card className={classes.tasks}>
        <TasksFilter
          selected={filteredGroup}
          onChangeFilter={filterChangeHandler}
        />
        <TasksList tasks={filteredTasks} />
      </Card>
    </div>
  );
};

export default Tasks;
