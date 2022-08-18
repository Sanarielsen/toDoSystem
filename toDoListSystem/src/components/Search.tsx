import styles from './Search.module.css'

export function Search() {

    return (

        <div className={styles.context}>
            <form>
                
                <input type="text" name="txtTaskDescription" />
                <button type="button"> Criar </button>
            </form>
        </div>
    )
}