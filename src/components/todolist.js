import React, { Component } from 'react';
import '../App.css';
import '../bootstrap.css';

class TodoList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.listItem.map((todo, i) =>
                        <li key={i} className={this.props.giveClass}>
                            <input  type="checkbox" ref="checkbox"
                             className="" 
                             onChange={(event)=> this.props.doneItem(i, event)}/>
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