import { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';



const DUMMY_TASKS = [
  {
    id: 1,
    title: 'Title1',
    description: 'Description1',
    date: new Date(2021, 2, 30, 3, 0),
    status: 'active'
  },
  {
    id: 2,
    title: 'Title2',
    description: 'Description2',
    date: new Date(2021, 2, 30, 4, 0),
    status: 'finished'
  },
  {
    id: 3,
    title: 'Title3',
    description: 'Description3',
    date: new Date(2021, 2, 30, 5, 0),
    status: 'unfinished'
  },
  {
    id: 4,
    title: 'Title4',
    description: 'Description4',
    date: new Date(2021, 2, 30, 6, 0),
    status: 'archives'
  },  
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
      <Tasks items = {tasks}/>
    </Fragment>
  );
}

export default App;
