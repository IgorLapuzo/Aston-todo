import { Component } from 'react';
import Header from './components/Layout/Header';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import ModalView from './components/UI/ModalView';
import { ThemeContext } from './context/ThemeContext'

class App extends Component {
  constructor() {
    super();
    this.state={
      tasks: [],
      theme: 'light',
      activeId: '',
      activeTitle: '',
      activeDescription: '',
      activeDate: '',
      activeStatus: '',
      editTitleMode: false,
      editDescriptionMode: false,
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

  componentDidMount() {
    const getItems = JSON.parse(localStorage.getItem('tasks'), function(key, value) {
      if (typeof value === 'string' && /^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/.test(value)) {
        return new Date(value)
      }
      return value
    }) || []
    const localTheme = localStorage.getItem('theme') || 'light'
    this.setState({
      tasks: getItems,
      theme: localTheme,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps === this.props && prevState === this.state) return;
    document.body.dataset.theme = this.state.theme;
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    localStorage.setItem('theme', this.state.theme)
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
