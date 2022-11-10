import axios from 'axios';
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import isEmpty from 'validator/lib/isEmpty';
import Button from '../common/Button';
import Input from '../common/Input';
import RadioInput from '../common/Radio';

function Form() {
    const navigative = useNavigate()
    const [validate, setValidate] = useState('')
    const [duplicate, setDuplicate] = useState('')
    const [form, setForm] = useState({
        title: "", author: "", description: "", status: 'New',
        id: uuidv4()
    })
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/item')
            .then((res) => {
                setData(res.data)
            })
    }, [])
    const titleRef = useRef()
    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }
    const handlePickStatus = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }
    const validateForm = () => {
        const message = {}

        if (isEmpty(form.title)) {
            message.title = '* Please fill title task'
        }
        if (isEmpty(form.author)) {
            message.author = '* Please fill creator task'
        }
        if (isEmpty(form.description)) {
            message.description = '* Please fill description task'
        }
        setValidate(message)
        if (Object.keys(message).length > 0) return false
        return true
    }
    const checkDuplicate = () => {
        const title = data.map((item) => {
            return (item.title)
        })
        if (form.title == title.find(item => item == form.title)) {
            let mess = '* This task already exist'
            setDuplicate(mess)
            return false
        } else {
            let mess = ''
            setDuplicate(mess)
            return true
        }
    }
    const handleAdd = (e) => {
        e.preventDefault();
        const isDuplicate = checkDuplicate();
        const isValid = validateForm()
        if (!isValid)
            return
        if (isDuplicate == false)
            return
        async function potstItem() {
            try {
                const res = await axios.post('http://localhost:8000/item',form)
            } catch (error) {
                console.log('loi roif boa doa');
            }
        }
        potstItem()
        const path='/';
        navigative(path)
    }

    return (
        <form className='form'>
            <div className='form__input'>
                <Input
                    innerRef={titleRef}
                    autoFocus
                    ipboder='input_boder'
                    inputname='title'
                    duplicate={duplicate}
                    inputClass={clsx('input__type')}
                    inputValue={form.title}
                    handleChange={handleChange}
                    validate={validate.title}
                    placeholder='Task 1'
                />
                <Input
                    inputname='author'
                    ipboder='input_boder'
                    inputClass='input__type'
                    handleChange={handleChange}
                    inputValue={form.author}
                    placeholder='Duong Viet Duc'
                    validate={validate.author}
                />
                <Input
                    ipboder='input_boder'
                    inputValue={form.description}
                    inputClass='input__type'
                    inputname='description'
                    placeholder='This is a task'
                    handleChange={handleChange}
                    validate={validate.description}
                />
            </div>
            <div className='radio__input'>
                <RadioInput name="status" radioValue="New" handleChange={handlePickStatus} />
                <RadioInput name="status" radioValue="Doing" handleChange={handlePickStatus} />
                <RadioInput name="status" radioValue="Done" handleChange={handlePickStatus} />
            </div>
            <div className='form__btn'>
                <Button btnTask="Save" inputType="button" className='form__btn--elm'
                    handleClick={handleAdd} />
            </div>

        </form>
    );
}

export default Form;