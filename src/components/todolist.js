import React, { Component } from 'react';
import '../App.css';
import '../bootstrap.css';
import RenderList from './todoItems';

class TodoList extends Component {
    render() {
        return (

            <div>
                <RenderList
                    removeItem={(i) => this.props.removeItem(i)}
                    listItem={this.props.listItem}
                    doneItem={(event, i) => this.props.doneItem(event, i)}
                />
            </div>
        )
    }
}
export default TodoList;