import axios from 'axios';
import React, { useState, useEffect } from 'react';
import PaginatedItems from '../pagination/Pagination';

function Todo() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/item')
            .then((res) => {
                setData(res.data)
            })
    }, [])
    return (
        <div className="todo">
          <PaginatedItems data={data}/>  
        </div>
    );
}

export default Todo;