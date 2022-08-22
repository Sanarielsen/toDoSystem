import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Header} from './components/Header'
import { Search } from './components/Search'
import { Task } from './components/Task'
import styles from './App.module.css'
import './global.css'

const listTasks = [
  {
    description: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
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

  const [task, setTask] = useState([
    {
      description: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
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
  ]);
  
  function onDeleteTask(event : MouseEvent) {

    
  }

  return (
    <div className="main">

      <div className="header">

          <Header/>
      </div>
      <div className={styles.searchArea}>

          <Search/>
      </div>
      <div className={styles.propsTasks}>

          <div className={styles.propsTasksCreated}>
            <a> Tasks created <span> {listTasks.length} </span> </a>
          </div>
          <div className={styles.propsTasksChecked}>
            <a> Finished <span> 2 de {listTasks.length} </span> </a>
          </div>
      </div> 
      <div className={styles.panelTasks}>

          {listTasks.map((task, index) => {
            
            return (

              <Task
                key={index}
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
