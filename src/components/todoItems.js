import React, { Component } from 'react';

class RenderList extends Component {


    render() {
        return (
            <ul>
                {this.props.listItem.map((res, i) => {
                    return <li key={i} className={res.complete ? "done" : ""}>
                        {res.todo}
                        {i}
                        <input type="checkbox" ref="checkbox"
                            onChange={(event) => this.props.doneItem(event, i)} />
                        <button className="btn btn-danger" onClick={() => this.props.removeItem(i)}>Delete</button>
                        <hr />
                    </li>
                })}

            </ul>


        )
    }
}
export default RenderList