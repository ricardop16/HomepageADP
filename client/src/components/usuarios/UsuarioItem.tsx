import React from 'react'
import { Usuario } from './Usuario'

interface Props {
    usuario: Usuario
}

const UsuarioItem = ({usuario}: Props) => {
    return (
        <div>
            <h1>{usuario.nombre}</h1>
            <p>{usuario.apellido}</p>
        </div>
    )
}

export default UsuarioItem