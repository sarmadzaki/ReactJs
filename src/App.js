import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import TodoList from './components/todolist';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ "todo": "first todo", "complete": false }],

    }
    this.getTodos = this.getTodos.bind(this);
  }
  doneItem(event, i) {
    const checkbox = event.target.checked
    var data = this.state.data
    if (checkbox) {
    data[i].complete = true
      this.setState({
        data
      })
    }else {
      data[i].complete = false
      this.setState({
        data
      })
    }

  }
  // doneItem(i, event) {
  //   // if (checkbox === true) {
  //   //   // console.log(checkbox);
  //   //   return true
  //   // } else {
  //   //   // console.log(checkbox)
  //   //   return false
  //   // }
  // }

  getTodos(e, task) {
    e.preventDefault();
    var data = this.state.data;
    const complete = false
    const todo = this.refs.task.value
    // if (todo === "") {
    //   alert("You Must Add Something!");
    // } else
    //   this.setState({
    //     todos: [...this.state.todos, todo]
    //   })
    data = data.concat([{ todo, complete }])
    this.setState({
      data
    })
    this.refs.task.value=""
  }

  removeItem(i) {
    this.state.data.splice(i, 1)
    this.setState({
      data: this.state.data
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h2 className="App-logo">Todo</h2>
        </div>
        <br />
        <form onSubmit={this.getTodos} >
          <input className="form-control" type="text" ref="task" required  />
          <br />
          <button type='submit' className="btn btn-primary form-control">ADD</button>
        </form>
        <br />
        <br />

        <TodoList
          listItem={this.state.data}
          removeItem={(i) => this.removeItem(i)}
          doneItem={(event, i) => this.doneItem(event, i)}
        />
      </div>
    );
  }
}

export default App;
