import styles from './Search.module.css'
import imgPlus from '../assets/plus.svg'
import MouseEvent, { ChangeEvent, FormEvent, InputHTMLAttributes, InvalidEvent } from 'react'

export function Search({...props}) {
    
    //Responsible for create a specific text for validation on Input
    function handleNewTaskInvalid(event : ChangeEvent<HTMLInputElement>) {
    
        event.target.setCustomValidity('Please, create a task with instruction, empty is invalid')       
    }

    return (

        <div className={styles.context}>
            <form onSubmit={props.onSubmit}>
                
                <input
                    type="text" 
                    name="txtTaskDescription"
                    placeholder='Add a new task for you here'
                    value={props.value}
                    onChange={props.onChange}
                    onInvalid={handleNewTaskInvalid}
                    required
                 />
                <button type="submit"> <a> Create </a> <img className={styles.contextImg} src={imgPlus}/> </button>
            </form>
        </div>
    )
}