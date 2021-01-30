import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos }) => {

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
                id: Math.random() * 1000
            }
        ]);
        setInputText("");
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
                <select name="todos" className="filterOption">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;