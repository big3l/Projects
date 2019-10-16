import React, { Component } from 'react';
import InputTodo from './inputTodo';
import ListToDo from './listToDo';
import './App.css';


let todoItems = [];
todoItems.push({ id: 1, task: "Learn React", completed: false });
todoItems.push({ id: 2, task: "Take out the trash", completed: false });
todoItems.push({ id: 3, task: "Go to the gym", completed: false });

class TodoList extends Component {
  state = {
    todoValue: "",
    todoList: [],
  }

  changeToDoValue(e) {
    this.setState({ todoValue: e.target.value })
  }

  addToList() {
    let list = this.state.todoList;
    list.push(this.state.todoValue);

    this.setState({ todoList: list, todoValue: '' })
    console.log(this.state.todoList);
  }

  isValid = () => {
    if (this.state.todoValue === '') {
      return false;
    }
    return true;
  }
  
  removeItem = (item) => { 
    let myList = this.state.todoList.splice(item,1);
    this.setState({list:myList})

    alert(`You have deleted ${myList} from the list`);
    console.log(myList)
  }


  render() {
    return (
      <div className="App">
        {todoItems.map((item) => {
          return <h1> {item.task} </h1>
        })}

        <ListToDo list={this.state.todoList} remove={(item)=>this.removeItem(item)}/>

        <InputTodo todoValue={this.state.todoValue}
          changed={(e) => this.changeToDoValue(e)}
          errorMessage={this.isValid() ? '' : '* Field Required'}
        />
      

        <button onClick={() => this.addToList()} disabled={!this.isValid()}
          type="submit">Add to the List</button>
      </div>
    )
  }
}

export default TodoList;
