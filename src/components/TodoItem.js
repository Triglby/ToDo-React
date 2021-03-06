import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.taskDone ?
            'line-through' : 'none'
        }
    }

    render() {
        const { id, taskDesc } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.toggleComplete.bind
                    (this, id)} /> {' '}
                    {taskDesc}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.prototypes = {
    todos: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#CD0000',
    color: '#fff',
    border: 'line',
    borderColor: '#D7D7D7',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}


export default TodoItem
