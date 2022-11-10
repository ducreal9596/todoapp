import React from 'react';
import { Link } from 'react-router-dom';

function Task(props) {
    return (
        <div className="sidebar">
            <ul className="list-group">
                <Link to='/'><li className="group-item">ALL TASK</li></Link>
                <Link to='/newtask'><li className="group-item">NEW TASK</li></Link>
                <Link to='/doingtask'><li className="group-item">DOING TASK</li></Link>
                <Link to='/donetask'><li className="group-item">DONE TASK</li></Link>
            </ul>
        </div>
    );
}

export default Task;