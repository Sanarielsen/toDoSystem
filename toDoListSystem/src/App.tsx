import { ChangeEvent, FormEvent, useState } from 'react'
import reactLogo from './assets/react.svg'
import {Header} from './components/Header'
import { Search } from './components/Search'
import { Task } from './components/Task'
import styles from './App.module.css'
import './global.css'

function App() {

  const [currentTask, setCurrentTask] = useState('')
  const [tasks, setTasks] = useState([
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

  function onIncludeTask(event : FormEvent) {

    event.preventDefault()

    let currentTaskComplete = {
        description: currentTask,
        status: false
    }

    setTasks([...tasks, currentTaskComplete])
  }

  function handleNewTaskChange( event: ChangeEvent<HTMLInputElement> ) {

    setCurrentTask(event.target.value)
  }
  
  function onDeleteTask(taskIndex: number) {

    tasks.splice(taskIndex, 1)
    setTasks([...tasks])
  }

  return (
    <div className="main">

      <div className="header">

          <Header/>
      </div>
      <div className={styles.searchArea}>

          <Search onSubmit={onIncludeTask} onChange={handleNewTaskChange}/>
      </div>
      <div className={styles.propsTasks}>

          <div className={styles.propsTasksCreated}>
            <a> Tasks created <span> {tasks.length} </span> </a>
          </div>
          <div className={styles.propsTasksChecked}>
            <a> Finished <span> 2 de {tasks.length} </span> </a>
          </div>
      </div> 
      <div className={styles.panelTasks}>

          {tasks.map((task, index) => {
            
            return (

              <Task
                key={index}
                index={index}
                description={task.description}
                status={task.status}
                checked={task.status}
                onDeleteTask={onDeleteTask}
              />
            )
          })}
      </div>
    </div>
  )
}

export default App
