import React, { FormEvent, useState } from 'react'

import styles from './Form.module.scss'
import InputBlock from '../InputBlock/InputBlock'
import CreatedForm from '../CreatedForm/CreatedForm'

export interface IData {
    inputs: string,
    textareas: string,
    checkboxes: string
}

const Form = () => {

    const [inputs, setInputs] = useState('')
    const [textareas, setTextareas] = useState('')
    const [checkboxes, setCheckboxes] = useState('')

    const [data, setData] = useState<IData>({inputs: '', textareas: '', checkboxes: ''})
    const [showForm, setShowForm] = useState(true)

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        if(inputs && textareas && checkboxes) {
            setData({
                inputs,
                textareas,
                checkboxes
            })
            setShowForm(false)
        }
    }
    
  return (
    <>
        {showForm && <form action="#" className={styles.form} onSubmit={onSubmit}>
            <InputBlock text={'How many inputs?'} value={inputs} setValue={setInputs} />
            <InputBlock text='How many textareas?' value={textareas} setValue={setTextareas} />
            <InputBlock text='How many checkboxes?' value={checkboxes} setValue={setCheckboxes} />
            <button type='submit'>BUILD</button>
        </form>}
        <CreatedForm data={data} />
    </>
  )
}

export default Form