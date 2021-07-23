import React, {Component} from 'react';
import './App.css';
import {Button, Input} from 'reactstrap';
import Task from './components/Card/Card';

class App extends Component{
  state ={
    taskArray: [
                {title: 'Finish the task'},
                {title: 'Get er done'},
                {title: 'Doing the things'},
                {title: 'You can do it'},
                {title: 'Well on your way'},
                {title: 'Finish the task'},
                {title: 'Finish the task'},
              ]
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
    //Grabs id of span which is = to index of item in taskArray
    const selected = event.target.id
    let fixed = list.filter((task) => task !== list[selected])
    // list.filter((fixed) => list[fixed])
    console.log(list.filter((task) => task !== list[selected]))
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
        <div className='container'>
          <div className='row col-11'>
            <Input className='col' onChange={(event) => this.changeName(event)} name='Name of Input' 
              placeholder='Card Title'
              />
            <Button
              className='col-3'
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