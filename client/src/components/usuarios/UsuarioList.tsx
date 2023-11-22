import React ,{useEffect, useState} from "react"

import * as usuarioService from './UsuarioService'
import { Usuario } from "./Usuario"
import UsuarioItem from './UsuarioItem'


const UsuarioList = () => {

    const [usuarios, setUsuario] = useState<Usuario[]>([]) 

    const loadUsuarios =async () => {
        const res = await usuarioService.getUsuario()
        setUsuario(res.data)
    }

    useEffect(() =>{
        loadUsuarios()
    }, [])

    return(
        <div>
            {usuarios.map((Usuario) => {
                return <UsuarioItem usuario= {Usuario}/>
            })}
        </div>
    )
}

export default UsuarioList