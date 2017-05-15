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
      giveClass: ""
    }
    this.getTodos = this.getTodos.bind(this);
  }
  doneItem(i, event) {
    const checkbox = event.target.checked;
    if (checkbox === true) {
      console.log(checkbox);
      this.setState({
        giveClass: "foo"
      })
      console.log(this.state.giveClass)
    } else {
      console.log(checkbox)
    }
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
          <h2>Todo</h2>
        </div>
        <br />

        <form onSubmit={this.getTodos} >
          <input className="form-control" type="text" ref="todo" />
          <br />
          <button onClick={this.getTodos} className="btn btn-primary form-control">ADD</button>
        </form>
        <br />
        <br />
        <TodoList
          listItem={this.state.todos}
          doneClass={this.state.class}
          removeItem={(i) => this.removeItem(i)}
          doneItem={(i, event) => this.doneItem(i, event)}
          giveClass={this.state.giveClass} />
      </div>
    );
  }
}

export default App;
