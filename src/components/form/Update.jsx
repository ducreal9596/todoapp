import React, { useEffect, useRef, useState } from 'react';
import RadioInput from '../common/Radio';
import { Link, useNavigate } from "react-router-dom";
import isEmpty from 'validator/lib/isEmpty'
import Inputedit from '../common/Input';
import Button from '../common/Button';
import axios from 'axios';
const getData = 'http://localhost:8000/item'
function Update() {
    const [duplicate, setDuplicate] = useState('')
    const [validate, setValidate] = useState('')
    const titleRef = useRef()
    const idupdate =  JSON.parse(localStorage.getItem('idupdate'))
    const [data, setData] = useState([])
    const [form, setForm] = useState({
        title: '',
        author: '',
        description: '',
        status: 'New'
    })
    useEffect(() => {
        async function getApi() {
            const res = await axios.get(getData);
            setData(res.data);
        }
        getApi()
    }, [])
    useEffect(() => {
        async function getApi() {
            try {
                const response = await axios.get(`${getData}/${idupdate}`);
                setForm({
                    title: response.data.title,
                    author: response.data.author,
                    description: response.data.description,
                    id: response.data.id
                })
            } catch (err) {
                console.log('Bất ngờ chưa Bòa Dòa' + err);
            }
        }
        getApi()
    }, [idupdate])
    const handlePick = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }
    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }
    const navigate = useNavigate();
    const validateForm = () => {
        const mess = {}
        if (isEmpty(form.title)) {
            mess.title = '* Please fill this field'
        }
        if (isEmpty(form.author)) {
            mess.author = '* Please fill this field'
        }
        setValidate(mess)
        if (Object.keys(mess).length > 0) return false
        return true
    }
    const checkDuplicate = () => {
        const title = data.map((item) => {
            return (item.title)
        })
        if (form.title === title.find(item => item!==form.title)) {
            const mess = '* This task already exist'
            setDuplicate(mess)
            return false
        } else {
            const mess = ''
            setDuplicate(mess)
            return true
        }
    }
    const handleUpdate = (e) => {
        e.preventDefault()
        const isDuplicate = checkDuplicate();
        const isValid = validateForm()
        if (!isValid)
            return
        if (!isDuplicate)
            return
        axios.patch(`http://localhost:8000/item/${idupdate}`, {
            title: form.title,
            author: form.author,
            description: form.description,
            status: form.status,
            id: form.id
        })
        const path = '/';
        navigate(path);
        window.location.reload()
    }
    const handleDelete = () => {
        axios.delete(`http://localhost:8000/item/${idupdate}`)
        const path = '/';
        navigate(path);
    }
    const handleReset = (e) => {
        setForm({
            title: form.title,
            author: form.author,
            description: form.description,
            status: form.status,
            id: form.id
        })
        titleRef.current.focus()
    }
    return (
        <form className='form__update'>
            <Link to='/' ><i className="fa-solid fa-xmark close"></i></Link>
            <Inputedit
                innerRef={titleRef}
                inputname='title'
                autoFocus
                duplicate={duplicate}
                ipboder='input_boder'
                inputValue={form.title}
                inputClass='input__type'
                handleChange={handleChange}
                validate={validate.title}
                placeholder='Task 1'
            />
            <Inputedit
                inputname='author'
                inputClass='input__type'
                handleChange={handleChange}
                inputValue={form.author}
                placeholder='Duong Viet Duc'
                ipboder='input_boder'
                validate={validate.author}
            />
            <Inputedit
                inputValue={form.description}
                ipboder='input_boder'
                inputClass='input__type'
                inputname='description'
                placeholder='This is a task'
                handleChange={handleChange}
            />
            <div className='radio__input'>
                <RadioInput name="status" radioValue="New" handleChange={handlePick} />
                <RadioInput name="status" radioValue="Doing" handleChange={handlePick} />
                <RadioInput name="status" radioValue="Done" handleChange={handlePick} />
            </div>
            <div className='form__btn--update'>
                <Button btnTask="Update" name='update' inpuType='button' handleClick={handleUpdate} />
                <Button btnTask="Reset" name='reset' inpuType="reset" handleClick={handleReset} />
                <Button btnTask="Delete" name='delete' inpuType='button' handleClick={handleDelete} />
            </div>

        </form>
    );
}

export default Update;