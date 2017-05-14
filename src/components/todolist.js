import React, { Component } from 'react';
import '../App.css';
import '../bootstrap.css';

class TodoList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.listItem.map((todo, i) =>
                        <li key={i}>
                            <input type="checkbox" ref="checkbox" value="" />
                            {todo}
                            <span> </span>
                            <button className="btn btn-danger" onClick={() => this.props.removeItem(i)}>Delete</button>
                            <hr />
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}
export default TodoList;