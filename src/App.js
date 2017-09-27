import React, { Component } from 'react';
import './App.css';
import TodoForm from './Components/todo/TodoForm.js';
import TodoList from './Components/todo/TodoList.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: ['Eat', 'Code', 'Eat', 'Sleep']
    }
  }

  render() {
    return (
      <div>
        <h1>The Todo list</h1>
        <TodoForm />
        <TodoList todo_data={this.state.todos} />
      </div>
    );
  }
}

export default App;
