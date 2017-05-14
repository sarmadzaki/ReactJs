import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import TodoList from './components/todolist';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      checkbox: false,
      class: ""
    }
    this.getTodos = this.getTodos.bind(this);
  }
  doneItem() {
    const checkbox = this.refs.checkbox.checked;
    console.log(checkbox);
}

  getTodos(e) {
    e.preventDefault();
    const todo = this.refs.todo.value;
    if (todo === "") {
      alert("You Must Add Something!");
    } else
      this.setState({
        todos: [...this.state.todos, todo]
      })
  }
  removeItem(i) {
    this.state.todos.splice(i, 1)
    this.setState({
      todos: this.state.todos
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <form onSubmit={this.getTodos}>
          <input type="text" ref="todo" />
          <span> </span>
          <button onClick={this.getTodos} className="btn btn-primary">ADD</button>
        </form>
        <TodoList
          listItem={this.state.todos}
          doneClass={this.state.class}
          removeItem={(i) => this.removeItem(i)}
          doneItem={() => this.doneItem()} />
      </div>
    );
  }
}

export default App;
