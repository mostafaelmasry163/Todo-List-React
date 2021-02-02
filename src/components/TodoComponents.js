import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {

    const deleteHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    fall: true
                }
            }
            return item;
        }));

        setTimeout(() => {
            setTodos(todos.filter((el) => el.id !== todo.id));
        }, 300);

    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }));
    }

    return (
        <div className={`todo ${todo.fall ? "fall" : ""}`}>
            <li
                className={`todoItem ${todo.completed ? "completed" : ""}`}
            >
                {text}
            </li>
            <button onClick={completeHandler} className="doneBtn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="delBtn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;