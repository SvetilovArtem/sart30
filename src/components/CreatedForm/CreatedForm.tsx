import React from 'react'

import styles from './CreatedForm.module.scss'

interface CreatedFormProps {
    data: {
        inputs: string
        textareas: string
        checkboxes: string
    }
}

const CreatedForm = ({data}:CreatedFormProps) => {

    const inputsArr: number[] = Array.from({length: Number(data.inputs)}, () => Math.floor(Math.random() * Number(data.inputs)))
    const textareasArr: number[] = Array.from({length: Number(data.textareas)}, () => Math.floor(Math.random() * Number(data.textareas)))
    const checkboxesArr: number[] = Array.from({length: Number(data.checkboxes)}, () => Math.floor(Math.random() * Number(data.checkboxes)))

    console.log(data.inputs, data.textareas, data.checkboxes)

  return (
    <div>
        <p>inputs: </p>
        {inputsArr.map((input, index) => {
          return (
            <div className={styles.createdInput}>
              <h6>Input {index + 1}</h6>
              <input type='number'/>
            </div> 
          ) 
        })}
        <p>textareas: </p>
        {textareasArr.map((input, index) => {
          return (
            <div className={styles.createdInput}>
              <h6>Textarea {index + 1}</h6>
              <textarea></textarea>
            </div> 
          ) 
        })}
        <p>checkboxes: </p>
        {checkboxesArr.map((input, index) => {
          return (
            <div className={styles.createdInput}>
              <h6>Checkbox {index + 1}</h6>
              <input type='checkbox'/>
            </div> 
          ) 
        })}
    </div>
  )
}

export default CreatedForm