import React from 'react';
import './tarea.css';
import { RiDeleteBin5Fill } from "react-icons/ri";

function Tarea  ({ id, texto, completada, completarTarea, eliminarTarea }) {
    return(
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div 
                className='tarea-texto'
                onClick={()=>completarTarea(id)}
            >
                {texto}
            </div>
            <div 
                className="tarea-contenedor-icono"
                onClick={()=>eliminarTarea(id)}
            >
                <RiDeleteBin5Fill className='tarea-icono' />
            </div>
        </div>
    );
};
export { Tarea };