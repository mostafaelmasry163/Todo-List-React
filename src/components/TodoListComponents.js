import React from 'react';
import Todo from './TodoComponents';

const TodoList = ({ todos }) => {



    return (
        <div className="todoContainer">
            <ul className="todoList">
                {todos.map(todo => (
                    <Todo text={todo.text} key={todo.id} />
                ))}
            </ul>
        </div>
    );
}


export default TodoList;