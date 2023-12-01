import axios from "axios"

export const getUsuario = async () => {
    return await axios.get('http://localhost:1235/api/usuario')
}

