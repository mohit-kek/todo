import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo } from '../actions/index';
import "./TodoForm.css";
import { useNavigate } from 'react-router-dom';

const TodoForm = ({ todoId, setTodoId }) => {
    const [inputData, setInputData] = useState({
        title: "",
        task: "",
        dueDate: ""
    });

    const todoList = useSelector((state) => state.allReducers.todoList);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        if (todoList) setInputData(todoList);
    }, [todoList]);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputData.title && inputData.task && inputData.dueDate !== "") {

            if (todoId === null) {
                console.log(inputData)
                dispatch(addTodo(inputData))
            } else {
                dispatch(updateTodo(todoId, inputData))
            }
            clear();
            navigate("/todo")
        }
    }


    const clear = () => {
        setTodoId(null);
        setInputData(null);
    }

    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setInputData({
            ...inputData, [name]: value
        })
    }

    return (
        <div>
            <form className='todo-form' >
                <h3 className='heading'>{todoId ? "Update Form" : "Todo Form"}</h3>
                <input type="text" placeholder='Title' value={inputData.title} name='title' className='todo-input' onChange={handleChange} />
                <textarea type="message" placeholder='Task' value={inputData.task} name='task' className='todo-input' onChange={handleChange} />
                <input type="date" placeholder=' Select Due Date' value={inputData.dueDate} name='dueDate' className='todo-input' onChange={handleChange} />
                <button className='todo-button' onClick={handleSubmit}>{todoId ? "Update Todo" : "Add Todo"}</button>
            </form>
        </div>
    )
}

export default TodoForm