
import React, { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskForm() {

    const [tarea, setTarea] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const { crearTarear } = useContext(TaskContext)


    function handleSubmit(e) {
        e.preventDefault();
        crearTarear(tarea, descripcion)
        setTarea('');
        setDescripcion('');
    }

    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 ">
                <h1 className='text-2xl font-bold text-white mb-3 '> Crea tu Tarea</h1>
                <input className='bg-slate-300 p-3 w-full mb-2' type="text" placeholder='escribe tu tarea'
                    onChange={e => setTarea(e.target.value)} value={tarea} autoFocus />
                <textarea className='bg-slate-300 p-3 w-full mb-2' placeholder='escribe tu descripcion'
                    onChange={e => setDescripcion(e.target.value)} value={descripcion}></textarea>
                <button className='bg-indigo-600 px-3 py-1 text-white '>Guardar</button>
            </form>
        </div>
    )
}

export default TaskForm