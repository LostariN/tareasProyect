import React, { createContext, useEffect, useState } from 'react'
import { tasks } from '../tasks'

export const TaskContext = createContext()


export function TaskContextProvider(props) {
    const [tareas, setTareas] = useState([])

    useEffect(() => {
        setTareas(tasks)
    }, [])


    function crearTarear(task, descripcion) {
        setTareas([...tareas, {
            id: tareas.length,
            name: task,
            descripcion: descripcion,
            prioridad: 'low'
        }])
    }
    function eliminarTarea(id) {
        const tareasFiltradas = tareas.filter(tarea => tarea.id !== id)

        setTareas(tareasFiltradas)
    }
    return (
        <TaskContext.Provider value={{
            tareas,
            crearTarear,
            eliminarTarea
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}

