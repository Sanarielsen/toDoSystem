import { ChangeEvent, FormEvent, useState } from 'react'
import {Header} from './components/Header'
import { Search } from './components/Search'
import imgClipboard from './assets/Clipboard.svg'
import styles from './App.module.css'
import './global.css'
import { TaskViewSimple } from './features/task/components/TaskViewSimple'
import { Task, TaskStatus } from './features/task/types/Task'

function App() {
  
  const [currentTask, setCurrentTask] = useState('')
  const [tasks, setTasks] = useState<Task[]>([]);

  //Function response to the add the task to list of tasks
  function onIncludeTask(event : FormEvent) {

    event.preventDefault()

    let currentTaskComplete: Task = {
        title: currentTask,
        status: TaskStatus.UNCOMPLETED
    }

    setTasks([...tasks, currentTaskComplete])
    setCurrentTask('');
  }

  //Function response to save the input value in execution time
  function handleNewTaskChange( event: ChangeEvent<HTMLInputElement> ) {

    event.target.setCustomValidity('')
    setCurrentTask(event.target.value)
  }

  //Responsible to change the image when we clicked the component
  // function handleTaskStatusChange(indexTask : number) {
    
  //   tasks[indexTask].status = !tasks[indexTask].status
  //   setTasks([...tasks])
  // }
  
  //Responsible to delete the current task
  function onDeleteTask(taskIndex: number) {

    tasks.splice(taskIndex, 1)
    setTasks([...tasks])
  }  

  //Responsible to return number of tasks checked
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
            value={currentTask}
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
          
          {tasks.length > 0 &&
              <div className={styles.panelList}>
                {tasks.map((task, index) => {
                  
                  return (
                    
                    // <Task
                    //   key={index}
                    //   index={index}
                    //   description={task.description}
                    //   status={task.status}
                    //   checked={task.status}
                    //   onDeleteTask={onDeleteTask}
                    //   onChangeStatus={handleTaskStatusChange}
                    // />
                    
                    <TaskViewSimple
                      key={index}
                      task={task}
                    />
                  )
                })}
              </div>
            }
            {tasks.length === 0 && 
              <div className={styles.panelWarning}>
                <img src={imgClipboard} />
                <p> <b> Você ainda não tem tarefas cadastradas </b> </p>
                <p> Crie tarefas e organize seus itens a fazer </p>
              </div>
            }
      </div>
    </div>
  )
}

export default App
