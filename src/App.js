import { Component } from 'react';
import Header from './components/Layout/Header';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import ModalView from './components/UI/ModalView';
import { ThemeContext } from './context/ThemeContext'

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

class App extends Component {
  constructor() {
    super();
    this.state={
      tasks: DUMMY_TASKS,
      theme: 'light',
      active: '',
      activeTitle: '',
      activeDescription: '',
      activeDate: '',
      activeStatus: '',
    }
  }

  changeThemeHandler = () => {
    this.setState(({theme}) => 
      ({theme: theme === 'light' ? 'dark' : 'light'})
    )
  }

  addTaskHandler = (task) => {
    this.setState({tasks: [...this.state.tasks, task]})
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps === this.props && prevState === this.state) return;
    document.body.dataset.theme = this.state.theme;
  }

  activeChangeHandler = (id) => {
    this.setState({active: id});
    for (let task of this.state.tasks) {
      if (id === task.id) {
        this.setState({
          activeTitle: task.title,
          activeDescription: task.description,
          activeDate: task.date,
          activeStatus: task.status,
        });
      }
    }
  };
 
  render() {
    return (
      <ThemeContext.Provider value={{value: this.state.theme, changeThemeHandler: this.changeThemeHandler}}>
        {this.state.active && (<ModalView 
          title={this.state.activeTitle}
          description={this.state.activeDescription}
          status={this.state.activeStatus}
          date={this.state.activeDate}
        />)}
        <Header />
        <NewTask onAddTask={this.addTaskHandler.bind(this)}/>
        <Tasks 
          items={this.state.tasks}
          onActiveChangeHandler={this.activeChangeHandler}
        />
      </ThemeContext.Provider>
    );
  }
}

export default App;
