import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Calendar from './components/calendar'
import Progress from './components/progress'
import Tasks from './components/tasks'

class App extends React.Component {

  state = {
    tasks: exampleTasks,
    selectedPage: 'home'
  }

  onCheck = (e, item) => {
    const tasks = [...this.state.tasks]
    tasks.find(t => t.text === item.text).completed = e.target.checked
    this.setState({ tasks })
  }

  addTask = (t) => {
    const tasks = [...this.state.tasks]
    tasks.push(t)
    this.setState({ tasks })
  }

  render() {
    const { tasks, selectedDate } = this.state
    console.log(tasks, selectedDate)
    return (
      <div className="App">

        <Calendar dateSelected={(e) => this.setState({ selectedDate: e.unix() })} />
        {!selectedDate && <Progress tasks={tasks} />}
        {selectedDate && <Tasks data={tasks.filter(t => t.date === selectedDate)}
          selectedDate={selectedDate} onCheck={this.onCheck} addTask={this.addTask}
          back={() => this.setState({ selectedDate: null })}
        />}
      </div>
    );
  }
}

export default App;



const exampleTasks = [
]


