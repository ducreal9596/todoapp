import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
const getData = 'http://localhost:8000/item'
function SearchForm() {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        async function getApi() {
            const res = await axios.get(getData);
            setData(res.data);
        }
        getApi()
    }, [])
    const [search, setSearch] = useState('')
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const handleSearch = () => {
        let sera = data.filter(item => item.title);
        if(sera === search){
            localStorage.setItem('tasks', JSON.stringify(sera));
        }
    }
    const handleClick = (e) => {
        e.preventDefault(); 
        handleSearch()
    }
    const handleKeyup = (e) => {
        if (e.key == 'Enter') {
            handleSearch()
        }
    }
    return (
        <div>
            <nav className="navbar navbar-light">
                <div className="form-inline">
                    <Input
                        autoFocus
                        inputClass="form-control--elm"
                        placeholder='Typing something to search'
                        handleChange={handleChange}
                        handleKeyup={handleKeyup}
                    />
                    <Link to='/search'><Button
                        className="btn-search"
                        btnTask="Search"
                        handleClick={handleClick}
                    /></Link>
                </div>
            </nav>
        </div>
    );
};

export default SearchForm;