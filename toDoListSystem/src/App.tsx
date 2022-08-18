import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Header} from './components/Header'
import { Search } from './components/Search'
import { Task } from './components/Task'
import styles from './App.module.css'
import './global.css'

function App() {
  
  return (
    <div className="main">

      <div className="header">

          <Header/>
      </div>
      <div className={styles.context}>

          <Search/>          
      </div>
      <div className={styles.propsTasks}>

          <a> Tabelas criadas <span> 5 </span> </a>
          <a> Concluídas <span> 2 de 5 </span> </a>
      </div> 
      <div className={styles.panelTasks}>

          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
      </div>
    </div>
  )
}

export default App
