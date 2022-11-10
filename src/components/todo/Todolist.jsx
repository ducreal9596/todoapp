import axios from 'axios';
import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../common/Button';

function Todolist({ item, id }) {
    const [status, setStatus] = useState(item.status);
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/item')
        .then((res) => {
            setData(res.data)
        })
    }, [])
    let idx = useRef()
    const handleClick  = (id,e) => {
        localStorage.setItem('idupdate',JSON.stringify(id));    
        idx.current = id
    }
    return (
        <div className='todolist col-md-12'>
            <div className='title'>
                <h6 className='title__task'>Title: {item.title}</h6>
                <p className='author'>Creator: {item.author}</p>
                <span className={status || item.status}>Status: {status || item.status}</span>
            </div>
            <div className="description">
                <h6 className='descript'>Description:</h6>
                <p className='description--p'>{item.description}</p>
                <div className="status">
                    <Link to='/update'> <Button className='change__up' handleClick={()=>handleClick(id)} btnTask='Change' /></Link>
                </div>
            </div>
        </div>
    );
}
// export const id = idx
export default Todolist;