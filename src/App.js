import React, {Component} from 'react';
import './App.css';
import {Button, Input} from 'reactstrap';
import Task from './components/Card/Card';

class App extends Component{
  state ={
    taskArray: [{title: 'Finish the task'},{title: 'Get er done'}]
  }

  changeName = (event)  => {
    console.log(event.target.value)
    const newName = event.target.value
    this.setState({title : newName})
  }

  createCard(event){
    event.preventDefault();
    const task = this.state.taskArray;
    const title = this.state.title;
    task.push({title})
    console.log(title)
    this.setState({taskArray : task})
  }

  removeTask = (event) => {
    const list = this.state.taskArray
    // const removed = list.filter(function(key) {
    //   return list !== key
    // });
    
    console.log(Object.keys(list))
}

  render() {
      return(
        <div className='container'>
          <form>
            <Input onChange={(event) => this.changeName(event)} name='Name of Input' 
              placeholder='Card Title'
              />
            <Button type='submit'
              color="primary" 
              onClick={this.createCard.bind(this)}
              >
              Submit
            </Button>
          </form>
          <div className='row'>
          {this.state.taskArray.map((task, index) => {
            return (<div className="d-inline" key={index}>
            <Task key={index} title={task.title} 
              button={<Button key={index}
                              type='button'
                              color='danger' 
                              className='col-3' 
                              onClick={(event) => this.removeTask(event)}>x
                      </Button>}>
            </Task>
            </div>
          )})}
          </div>
        </div>
         
      );
  };
}

export default App;