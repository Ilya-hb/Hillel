import './App.scss';
import React from 'react'
import Input from './components/Input';
import List from './components/List';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.createTask = this.createTask.bind(this);
  }

  createTask(name) {
    const task = {
      id: Date.now(),
      name
    }
    this.setState({
      list: [...this.state.list, task]
    })
  }

  render() {
    return (
      <div className='container-xxl mt-5'>
        <h1 className='text-center mb-5'>React To do App</h1>
        <Input onCreate={this.createTask} />
        <List list={this.state.list} />
      </div>
    )
  }
}

export default App;
