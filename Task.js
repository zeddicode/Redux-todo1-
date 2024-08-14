import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/actions';
import './Task.css';

function Task({ task }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newDescription, setNewDescription] = useState(task.description);
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTask(task.id));
    };

    const handleEdit = () => {
        if (isEditing) {
            dispatch(editTask(task.id, newDescription));
        }
        setIsEditing(!isEditing);
    };

    return (
        <div className={`task ${task.isDone ? 'completed' : ''}`}>
            <input 
                type="checkbox" 
                checked={task.isDone} 
                onChange={handleToggle} 
                className="task-checkbox"
            />
            {isEditing ? (
                <input 
                    type="text" 
                    value={newDescription} 
                    onChange={(e) => setNewDescription(e.target.value)} 
                    className="task-edit-input"
                />
            ) : (
                <span className="task-text">
                    {task.description}
                </span>
            )}
            <button onClick={handleEdit} className="edit-task-btn">
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </div>
    );
}

export default Task;
