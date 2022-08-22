import styles from './Search.module.css'
import imgPlus from '../assets/plus.svg'

export function Search() {

    return (

        <div className={styles.context}>
            <form>
                
                <input
                 type="text" name="txtTaskDescription" />
                <button type="submit"> <a> Criar </a> <img src={imgPlus}/> </button>
            </form>
        </div>
    )
}