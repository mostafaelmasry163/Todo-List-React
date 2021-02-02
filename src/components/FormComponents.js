import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();

        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                fall:false,
                id: parseInt(Math.random() * 1000)
            }
        ]);
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form>
            <input
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                className="todoInput"
            />
            <button onClick={submitTodoHandler} className="todoButton" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="filter">
                <select onChange={statusHandler} name="todos" className="filterOption">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;