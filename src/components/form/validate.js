import { useState } from 'react'
import isEmpty from 'validator/lib/isEmpty'

const ValidateForm = () => {
    const [form, setForm] = useState({
        title: '',
        author: '',
        description: '',
        status: 'New'
    })
    const [validate, setValidate] = useState('')
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
export default ValidateForm