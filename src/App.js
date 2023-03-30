import { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

const DUMMY_TASKS = [
  {id: 1, taskTitle: 'Title1', taskDescription: 'Description1', expiredDate: new Date(2021, 2, 30, 3, 0), status: 'active'},
  {id: 2, taskTitle: 'Title2', taskDescription: 'Description2', expiredDate: new Date(2021, 2, 30, 4, 0), status: 'finished'},
  {id: 3, taskTitle: 'Title3', taskDescription: 'Description3', expiredDate: new Date(2021, 2, 30, 5, 0), status: 'unfinished'},
  {id: 4, taskTitle: 'Title4', taskDescription: 'Description4', expiredDate: new Date(2021, 2, 30, 6, 0), status: 'archives'},  
]

function App() {
  const [tasks, setTasks] = useState(DUMMY_TASKS);

  const addTaskHandler = (task) => {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  };

  return (
    <Fragment>
      <Header />
      <NewTask onAddTask={addTaskHandler}/>
      <Tasks tasks = {tasks}/>
    </Fragment>
  );
}

export default App;
