import { Link, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useEffect} from 'react'


function LoginPage(){

    const {register, handleSubmit, formState:{errors}} = useForm()
    const {signin, isAuthenticated} = useAuth()

    const OnSubmit = (data)=>{
        signin(data)
        console.log(data)
    }
    const navigate = useNavigate();
  
    useEffect(() => {
    if (isAuthenticated) {
      navigate("/Test");
    }
  }     , [isAuthenticated, navigate]);



    return (
        <div className="h-[calc(100vh-100px)] flex items-center justify-center">
           <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">

           <h1 className="text-2xl font-bold">Login</h1>

                 <form 
                onSubmit={handleSubmit(OnSubmit)}
            >
            <input
                type='email'
                {... register("email", {required: true})}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                placeholder='Email'
            />
            {errors.nombre &&(
                <p className="text-red-500">email Requerido</p>
            )}

            <input
                type='password'
                {... register("contrasena", {required: true})}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                placeholder='Contraseña'
            />
            {errors.nombre &&(
                <p className="text-red-500">contrasena Requerida</p>
            )}

                <button type='submit'>Iniciar Sesion</button>

            </form>

            <p className="flex gap-x-2 justify-between">
            Dont have an account? <Link to="/register" className="text-sky-500">Sign up</Link>
            </p>


           </div>
        </div>
    )

}

export default LoginPage