import styles from './Header.module.css'
import toDoLogo from '../assets/toDoLindoLogo.svg'

export function Header() {
  return (
    <div className={styles.context}>
      <div className={styles.logoContext}>
        <img src={toDoLogo} className={styles.brandResponsive}/>
      </div>
    </div>
  )
}