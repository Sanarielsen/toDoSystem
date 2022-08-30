import { ChangeEvent, MouseEvent, InputHTMLAttributes, useState } from 'react'
import { CheckCircle, Circle, Trash } from 'phosphor-react'
import styles from './Task.module.css'
import CheckImg from '../assets/check-circle.svg'

interface TaskProps extends InputHTMLAttributes<HTMLInputElement>{

    description: string,
    status: boolean
}

export function Task({...props}) {

    const [statusTask, setStatusTask] = useState(false);
    
    //Responsible to change the status of the checkbox in a task;
    function handleChangeStatus(event: MouseEvent) {

        setStatusTask(!statusTask);
        props.onChangeStatus(props.index);
    }

    //Responsible to change the image of the checkbox;
    const changeImage = () => {

        let image

        if (statusTask) {
            
            image = <CheckCircle
                className={styles.taskChecked}
                size={20}
                onClick={handleChangeStatus}
            />
        } else {

            image = <Circle
                size={20}
                onClick={handleChangeStatus}
            />
        }
        return(image)
    }

    //Responsible to change the status of the current task
    const changeDescriptionState = () => {

        let descComponent

        if (statusTask) {

            descComponent = <label className={styles.taskDescriptionFinished}>{props.description}</label>
        } else {

            descComponent = <label>{props.description}</label>
        }

        return (descComponent)
    }

    //Responsible to delete the current status in a list;
    function handleDeleteTask(event: MouseEvent) {
        
        props.onDeleteTask(props.index)
    }

    return (
        <div className={styles.panel}>
            <div className={styles.task}>
                <div className={styles.taskCheck}>

                    {changeImage()}
                </div>
                <div className={styles.taskDescription}> {changeDescriptionState()} </div>
                <div className={styles.taskDelete}>
                    <Trash 
                        size={20}
                        onClick={handleDeleteTask}
                    />
                </div>
            </div>
        </div>
    )
}