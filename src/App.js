import { Fragment } from 'react';
import Header from './components/Layout/Header';
import TasksList from './components/Tasks/TasksList';


function App() {
  const tasks = [
    {id: 1, createdDate: new Date(2021, 2, 28, 8, 0), taskTitle: 'Title1', taskDescription: 'Description1', expiredDate: new Date(2021, 2, 30, 3, 0)},
    {id: 2, createDate: new Date(2021, 2, 28, 9, 0), taskTitle: 'Title2', taskDescription: 'Description2', expiredDate: new Date(2021, 2, 30, 4, 0)},
    {id: 3, createDate: new Date(2021, 2, 28, 10, 0), taskTitle: 'Title3', taskDescription: 'Description3', expiredDate: new Date(2021, 2, 30, 5, 0)},  
  ]
  
  return (
    <Fragment>
      <Header />
      <TasksList tasks = {tasks}/>
    </Fragment>
  );
}

export default App;
