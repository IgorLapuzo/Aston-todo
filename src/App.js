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
    status: 'active'
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
      activeId: '',
      activeTitle: '',
      activeDescription: '',
      activeDate: '',
      activeStatus: '',
      editTitleMode: false,
      editDescriptionMode: false,
      editDateMode: false,
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

  activeIdChangeHandler = (id) => {
    for (let task of this.state.tasks) {
      if (id === task.id) {
        this.setState({
          activeId: id,
          activeTitle: task.title,
          activeDescription: task.description,
          activeDate: task.date,
          activeStatus: task.status,
        });
      }
    }
  };

  closeActiveTask = () => {
    this.setState({
      tasks: [...this.state.tasks.filter(task => task.id !== this.state.activeId), {
        id: this.state.activeId,
        title: this.state.activeTitle,
        description: this.state.activeDescription,
        date: this.state.activeDate,
        status: this.state.activeStatus}],
      activeId: '',
      activeTitle: '',
      activeDescription: '',
      activeDate: '',
      activeStatus: '',
		})
  }


  deleteActiveTask = () => {
    this.setState({
      tasks: [...this.state.tasks.filter(task => task.id !== this.state.activeId)],
      activeId: '',
    }) 
  }

  archivesActiveTask = () => {
    for (let i=0; i<this.state.tasks.length; i++) {
      if (this.state.activeId === this.state.tasks[i].id && this.state.activeStatus !== 'archives') {
        this.setState({activeStatus: 'archives'})
        break;
      }
      if (this.state.activeId === this.state.tasks[i].id && this.state.activeStatus === 'archives') {
        this.setState({activeStatus: 'active'})
        break;
      }
    }
  }
  
  finishActiveTask = () => {
    for (let i=0; i<this.state.tasks.length; i++) {
      if (this.state.activeId === this.state.tasks[i].id && this.state.activeStatus === 'active') {
        this.setState({activeStatus: 'finished'})
        break;
      }
      if (this.state.activeId === this.state.tasks[i].id && this.state.activeStatus === 'finished') {
        this.setState({activeStatus: 'active'})
        break;
      }
    }
  }

  activateTitleEditMode = () => {
    this.setState({
			editTitleMode: true,
		})
  }

  activateDescriptionEditMode = () => {
    this.setState({
			editDescriptionMode: true,
		})
  }

  onTitleChange = (e) => {
		this.setState({
			activeTitle: e.currentTarget.value,
		});
	}

  onDescriptionChange = (e) => {
		this.setState({
      activeDescription: e.currentTarget.value,
		});
	}

  deactivateEditMode = () => {
		this.setState({
      editTitleMode: false,
			editDescriptionMode: false,
		})
	}

  render() {
    return (
      <ThemeContext.Provider value={{value: this.state.theme, changeThemeHandler: this.changeThemeHandler}}>
        {this.state.activeId && (<ModalView 
          title={this.state.activeTitle}
          description={this.state.activeDescription}
          status={this.state.activeStatus}
          date={this.state.activeDate}
          closeActiveTask={this.closeActiveTask}
          archivesActiveTask={this.archivesActiveTask}
          finishActiveTask={this.finishActiveTask}
          editTitleMode={this.state.editTitleMode}
          editDescriptionMode={this.state.editDescriptionMode}
          activateTitleEditMode={this.activateTitleEditMode}
          activateDescriptionEditMode={this.activateDescriptionEditMode}
          deactivateEditMode={this.deactivateEditMode}
          onTitleChange={this.onTitleChange}
          onDescriptionChange={this.onDescriptionChange}
          deleteActiveTask={this.deleteActiveTask}
        />)}
        <Header />
        <NewTask onAddTask={this.addTaskHandler.bind(this)}/>
        <Tasks 
          items={this.state.tasks}
          onActiveChangeHandler={this.activeIdChangeHandler}
        />
      </ThemeContext.Provider>
    );
  }
}

export default App;
