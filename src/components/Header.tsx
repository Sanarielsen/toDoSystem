import styles from './Header.module.css'
import toDoLogo from '../assets/Logo.svg'

export function Header() {

    return (

        <>
            <div className={styles.context}>

                <div className={styles.logoContext}>

                    <img src={toDoLogo}></img>
                </div>
            </div>
        </>
    )
}