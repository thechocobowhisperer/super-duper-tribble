import React, {Component} from 'react';
import './App.css';
import {Button, Input} from 'reactstrap';
import Task from './components/Card/Card';

class App extends Component{
  state ={
    taskArray: []
  }

  changeName = (event)  => {
    console.log(event.target.value)
    const newName = event.target.value
    this.setState({title : newName})
  }

  createCard(event){
    const task = this.state.taskArray;
    const title = this.state.title;
    task.concat({title})
    console.log(task)
    this.setState({taskArray : task})
  }

  removeTask = (event) => {
    const list = this.state.taskArray
    console.log(list)
}

  render() {
      return(
        <div className='container'>
          <form className='d-inline'>
            <Input onChange={(event) => this.changeName(event)} name='Name of Input' 
              placeholder='Card Title'
              />
            <Button
              color="primary" 
              onClick={this.createCard.bind(this)}
              >
              Submit
            </Button>
          </form>
          {this.state.taskArray.map((task, index) => {
            return (<div className="container" key={index}><Task title={task.title} 
            button={<Button className='col-3' onClick={(event) => this.removeTask(event)}>Remove Task</Button>}></Task></div>
          )})}

        </div>
         
      );
  };
}

export default App;