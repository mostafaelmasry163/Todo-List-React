import React from 'react';

const Todo = ({text}) => {
    return (
        <div className="todo">
            <li className="todoItem">{text}</li>
            <button className="completeBtn">
                <i className="fas fa-check"></i>
            </button>
            <button className="deleteBtn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;