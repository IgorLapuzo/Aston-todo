import classes from './TasksFilter.module.css';

const TasksFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className={classes.filter}>
      <div className={classes.control}>
        <label>Фильтр</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='all'>Все</option>
          <option value='active'>Активные</option>
          <option value='finished'>Выполненные</option>
					<option value='unfinished'>Неполненные</option>
          <option value='archives'>В архиве</option>
        </select>
      </div>
    </div>
  );
};

export default TasksFilter;