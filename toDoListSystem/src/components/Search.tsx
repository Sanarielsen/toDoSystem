import styles from './Search.module.css'
import imgPlus from '../assets/plus.svg'
import MouseEvent from 'react'

export function Search({...props}) {

    return (

        <div className={styles.context}>
            <form onSubmit={props.onSubmit}>
                
                <input
                    type="text" name="txtTaskDescription"
                    placeholder='Add a new task for you here'
                    onChange={props.onChange}
                 />
                <button type="submit"> <a> Create </a> <img className={styles.contextImg} src={imgPlus}/> </button>
            </form>
        </div>
    )
}