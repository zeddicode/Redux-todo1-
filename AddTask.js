import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import './AddTask.css';

function AddTask() {
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim()) {
            dispatch(addTask(description));
            setDescription('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-task-form">
            <input 
                type="text" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Add a new task"
                className="task-input"
            />
            <button type="submit" className="add-task-btn">Add Task</button>
        </form>
    );
}

export default AddTask;
