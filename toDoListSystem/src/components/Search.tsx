import styles from './Search.module.css'
import imgPlus from '../assets/plus.svg'

export function Search() {

    return (

        <div className={styles.context}>
            <form>
                
                <input
                 type="text" name="txtTaskDescription"
                 placeholder='Add a new task for you here' 
                 />
                <button type="submit"> <a> Create </a> <img className={styles.contextImg} src={imgPlus}/> </button>
            </form>
        </div>
    )
}