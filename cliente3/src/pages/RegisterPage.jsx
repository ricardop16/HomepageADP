import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function RegisterPage(){

    const { register, handleSubmit, formState:{errors}} = useForm();
    const {signup, isAuthenticated} =  useAuth();
    const navigate= useNavigate();

    
    useEffect(()=>{
        if (isAuthenticated) navigate('/');
    }, [isAuthenticated, navigate]);
    const OnSubmit = handleSubmit(async(data) =>{
        signup(data)
    })

    return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
        <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
            <form 
                onSubmit={OnSubmit}
            >

            <input
                type='text'
                {... register("nombre", {required: true})}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                placeholder='Nombre'
            />
            {errors.nombre &&(
                <p className="text-red-500">nombre Requerido</p>
            )}


            <input
                type='text'
                {... register("apellido", {required: true})}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                placeholder='Apellido'
            />
            {errors.nombre &&(
                <p className="text-red-500">apellido Requerido</p>
            )}
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

                <button type='submit'>Registrar</button>

                <p className="flex gap-x-2 justify-between">  Already Have an Account?
          <Link className="text-sky-500" to="/login">
            Login
          </Link>
        </p>

            </form>
        </div>
        </div>
    );

}

export default RegisterPage