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
    this.removeItem = this.removeItem.bind(this);
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
  removeItem(id) {
    const list = this.state.list.filter(el => (el.id !== id));
    this.setState({ list: list })
  }
  render() {
    return (
      <div className='container-xxl mt-5'>
        <h1 className='text-center mb-5'>React To do App</h1>
        <Input onCreate={this.createTask} />
        <List list={this.state.list} removeItem={this.removeItem} />
      </div>
    )
  }
}

export default App;
