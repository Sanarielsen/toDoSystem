import { ChangeEvent, InputHTMLAttributes, useState } from 'react'
import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

interface TaskProps extends InputHTMLAttributes<HTMLInputElement>{

    description: string,
    status: boolean
}

export function Task({...props}) {

    const [statusTask, setStatusTask] = useState(false);
    
    //Responsible to change the status of the checkbox in a task;
    function handleChangeStatusTask(event: ChangeEvent) {

        setStatusTask(!statusTask);
    }

    //Responsible to delete the current status in a list;
    function handleDeleteTask(event: MouseEvent) {

        console.log("Deletou o " + props.description)
    }

    return (
        <>
            <div className={styles.task}>
                <input 
                    type="checkbox" 
                    id={props.id} 
                    name={props.name}
                    checked={statusTask ? true : false} 
                    onChange={handleChangeStatusTask} />
                <label>{props.description}</label>
            </div>
            <div>
                <Trash 
                    size={20}
                    onClick={handleDeleteTask}
                />
            </div>
        </>
    )
}