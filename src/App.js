import React, {Component} from 'react';
import './App.css';
import {Button, Input} from 'reactstrap';
import Task from './components/Card/Card';
import { KeyObject } from 'crypto';

class App extends Component{
  state ={
    taskArray: [{title: 'Finish the task'},{title: 'Get er done'}]
  }

  changeName = (event)  => {
    console.log(event.target.value)
    const newName = event.target.value
    this.setState({title : newName})
  }

  createCard = (event) => {
    const task = this.state.taskArray;
    const title = this.state.title;
    task.push({title})
    console.log(title)
    this.setState({taskArray : task})
  }

  removeTask = (event) => {
    const list = this.state.taskArray
    const selected = event.target.id
    function notSelected(task){
      list.map((task, index) => {return list[selected] !== task})
    }
    const fixed = list.filter(notSelected)

    console.log(fixed)
    this.setState({taskArray : fixed})
    
}

  render() {
    const tasks = this.state.taskArray.map((task, index) => {
      return (<div key={index}>
      <Task key={index} title={task.title} 
        button={<span id={index}
                        type='button'
                        className='float-right col-1' 
                        onClick={(event) => this.removeTask(event)}>x
                </span>}>
      </Task>
      </div>
    )})
      return(
        <div className='form-group'>
          <div className='form-group'>
            <Input onChange={(event) => this.changeName(event)} name='Name of Input' 
              placeholder='Card Title'
              />
            <Button
              onClick={() => this.createCard()}
              >
              Submit
            </Button>
          </div>
          <div className='row'>
          {tasks}
          </div>
        </div>
         
      );
  };
}

export default App;