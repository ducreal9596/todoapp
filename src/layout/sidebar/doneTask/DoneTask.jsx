import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PaginatedItems from '../../../components/pagination/Pagination';

function DoneTask(props) {
    const [data,setData] = useState([]) 
    let todoDone = data.filter(item => item.status === 'Done')
    useEffect(() => {
        axios.get('http://localhost:8000/item')
            .then((res) => {
                setData(res.data)
            })
            .catch(res=>{
                console.log('Loi roi boa doa oi');
            })
    }, [])
    return (
        <div className="todo">
            <PaginatedItems data={todoDone} />
        </div>
    );
}

export default DoneTask;