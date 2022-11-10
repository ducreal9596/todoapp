import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PaginatedItems from '../../../components/pagination/Pagination';

function DoingTask(props) {
    const [data,setData] = useState([]) 
    let todoDoing = data.filter(item => item.status === 'Doing')
    useEffect(() => {
        axios.get('http://localhost:8000/item')
            .then((res) => {
                setData(res.data)
            })
    }, [])
    return (
        <div className="todo">
            <PaginatedItems data={todoDoing } />
        </div>
    );
}

export default DoingTask;