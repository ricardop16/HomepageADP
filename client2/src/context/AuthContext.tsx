import {ReactNode, createContext, useContext, useState} from 'react'
import { Usuario } from '../models/Usuario'
import { registerRequest } from '../api/auth'

interface UserContextType {
    user:Usuario | null
    setUser: React.Dispatch<React.SetStateAction<Usuario[] | null>>
    signup: (user: Usuario) => Promise<void> | null
}



interface Props{
    children?: ReactNode
}

export const AuthContext = createContext<UserContextType>(null)

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () =>{
    const context = useContext(AuthContext)
    if (!context){
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context 
}

export const AuthProvider = ({children}: Props) => {

    const [user, setuser] = useState<Usuario[]>()
    console.log(setuser)

    const signup  = async(user:Usuario) => {
        const res = await registerRequest(user)
        console.log(res.data)
        console.log(user)
        
    }
    
    return (
        <AuthContext.Provider value={{
            signup,
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}