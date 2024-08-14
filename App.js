import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from './redux/store';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import { filterTasks } from './redux/actions';
import './App.css';

function App() {
    const dispatch = useDispatch();

    const handleFilter = (filter) => {
        dispatch(filterTasks(filter));
    };

    return (
        <Provider store={store}>
            <div className="App">
                <h1 className="app-title">ToDo Application</h1>
                <AddTask />
                <div className="filter-buttons">
                    <button onClick={() => handleFilter('ALL')} className="filter-btn">All</button>
                    <button onClick={() => handleFilter('DONE')} className="filter-btn">Done</button>
                    <button onClick={() => handleFilter('NOT_DONE')} className="filter-btn">Not Done</button>
                </div>
                <ListTask />
            </div>
        </Provider>
    );
}

export default App;
