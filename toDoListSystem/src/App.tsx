import { ChangeEvent, FormEvent, useState } from 'react'
import reactLogo from './assets/react.svg'
import {Header} from './components/Header'
import { Search } from './components/Search'
import { Task } from './components/Task'
import styles from './App.module.css'
import './global.css'

type Task = {

  description: string,
  status: boolean
}

function App() {
  
  const [currentTask, setCurrentTask] = useState('')
  const [tasks, setTasks] = useState<Task[]>([]);

  function onIncludeTask(event : FormEvent) {

    event.preventDefault()

    let currentTaskComplete = {
        description: currentTask,
        status: false
    }

    setTasks([...tasks, currentTaskComplete])
  }

  //Function response to save the input value in execution time
  function handleNewTaskChange( event: ChangeEvent<HTMLInputElement> ) {

    setCurrentTask(event.target.value)
  }

  function handleTaskStatusChange(taskToChange : Task) {
    
    
  }
  
  function onDeleteTask(taskIndex: number) {

    tasks.splice(taskIndex, 1)
    setTasks([...tasks])
  }

  function verifyTasksChecked() {

    return tasks.filter( task => task.status).length
  }

  return (
    <div className="main">

      <div className="header">

          <Header/>
      </div>
      <div className={styles.searchArea}>

          <Search 
            onSubmit={onIncludeTask} 
            onChange={handleNewTaskChange}
          />
      </div>
      <div className={styles.propsTasks}>

          <div className={styles.propsTasksCreated}>
            
            <a> Tasks created <span> {tasks.length} </span> </a>
          </div>
          <div className={styles.propsTasksChecked}>
            
            <a> Finished <span> <>{verifyTasksChecked()} de {tasks.length}</> </span> </a>
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
                task={task}
                onDeleteTask={onDeleteTask}
                onChangeStatus={handleTaskStatusChange}
              />
            )
          })}
      </div>
    </div>
  )
}

export default App
