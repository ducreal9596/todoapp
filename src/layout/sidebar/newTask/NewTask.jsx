import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PaginatedItems from '../../../components/pagination/Pagination';
function NewTask(props) {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/item')
            .then((res) => {
                setData(res.data)
            })
    }, [])
    let todoNew = data.filter(item => item.status === 'New')
    return (
        <div className="todo">
            <PaginatedItems data={todoNew} />
        </div>
    );
}
export default NewTask;