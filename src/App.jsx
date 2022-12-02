import './App.css'
import TaskForm from './components/TaskForm'
import TasksList from './components/TasksList'


function App() {


  return (
    <div className='bg-zinc-900 h-screen'>
      <div className='container mx-auto p-10'>
        <TaskForm />
        <TasksList />
      </div>
    </div>
  )
}

export default App
