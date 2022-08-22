import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Header} from './components/Header'
import { Search } from './components/Search'
import { Task } from './components/Task'
import styles from './App.module.css'
import './global.css'

const listTasks = [
  {
    description: "Fazer a atividade do ignite",
    status: true
  },
  {
    description: "Fazer a atividade do ignite 2",
    status: true
  },
  {
    description: "Fazer a atividade do ignite 3",
    status: true
  },
  {
    description: "Fazer a atividade do ignite 4",
    status: false
  }
]

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

          <div className={styles.propsTasksCreated}>
            <a> Tasks criadas <span> {listTasks.length} </span> </a>
          </div>
          <div className={styles.propsTasksChecked}>
            <a> Concluídas <span> 2 de {listTasks.length} </span> </a>
          </div>
      </div> 
      <div className={styles.panelTasks}>

          {listTasks.map(task => {

            return (

              <Task
                key={task.description}
                description={task.description} 
                status={task.status} 
                checked={task.status}
              />
            )
          })}
      </div>
    </div>
  )
}

export default App
