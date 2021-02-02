import React from 'react';
import Todo from './TodoComponents';

const TodoList = ({ todos, setTodos, filteredTodos }) => {

    return (
        <div className="todoContainer">
            <ul className="todoList">
                {filteredTodos.map(todo => (
                    <Todo
                        todos={todos}
                        setTodos={setTodos}
                        text={todo.text}
                        key={todo.id}
                        todo={todo}
                    />
                ))}
            </ul>
        </div>
    );
}


export default TodoList;