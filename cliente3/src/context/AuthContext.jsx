import {createContext, useContext, useState, useEffect} from 'react';
import { registerRequest, loginRequest, verifyTokenRequest } from '../api/Auth';

import Cookies from 'js-cookie'


export const AuthContext = createContext(null);


// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () =>{
    const context = useContext(AuthContext)
    if (!context){
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context 
}

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [isAuthenticated, SetisAuthenticated] = useState(false)
    const [loading, setLoading] = useState(false)
    

    const signup  = async(user) => {
        try{
        const res = await registerRequest(user)
        console.log(res.data)
        setuser(res.data)
        SetisAuthenticated(true)
        }

        catch (error){
            console.log(error)
        }
        
    }

    const signin = async(user) =>{
        try {
            const res = await loginRequest(user)
            setuser(res.data)
            SetisAuthenticated(true);
            console.log(res)
            
        } catch (error) {
            console.log(error)
        }
    }

    const logout = () =>{
        Cookies.remove("token")
        SetisAuthenticated(false)
        setuser(null)
    }
    
    useEffect(() => {

        async function checkLogin(){
        const cookies = Cookies.get()

        if (!cookies.token) {
            SetisAuthenticated(false)
            setLoading(false)
            setuser(null)
            return
        }
        
        if (cookies.token){
            try {
                const res = verifyTokenRequest(cookies.token)
                if (!res.data) {
                    SetisAuthenticated(false)
                    setLoading(false)
                    
                }
                SetisAuthenticated(true)
                setuser(res.data)
                setLoading(false)
            } catch (error) {
                SetisAuthenticated(false)
                setuser(null)
                setLoading(false)
                
            }
        }
    }
    checkLogin()

    },[isAuthenticated])

    
    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            logout,
            user,
            isAuthenticated,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    )
}