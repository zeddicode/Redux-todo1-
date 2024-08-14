import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import './ListTask.css';

function ListTask() {
    const tasks = useSelector(state => state.tasks);
    const filter = useSelector(state => state.filter);

    const filteredTasks = tasks.filter(task => {
        if (filter === 'ALL') return true;
        if (filter === 'DONE') return task.isDone;
        if (filter === 'NOT_DONE') return !task.isDone;
        return true;
    });

    return (
        <div className="task-list">
            {filteredTasks.map(task => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
}

export default ListTask;
