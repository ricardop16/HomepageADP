import { useForm } from 'react-hook-form'
import { Usuario } from '../models/Usuario';
import { useAuth } from '../context/AuthContext';

function RegisterPage(){

    const { register, handleSubmit} = useForm<Usuario>();

    const {signup} =  useAuth()
    
    
    const OnSubmit = handleSubmit(async(values) =>{
        signup(values)
    })

    return (
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

            <input
                type='text'
                {... register("apellido", {required: true})}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                placeholder='Apellido'
            />

            <input
                type='email'
                {... register("email", {required: true})}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                placeholder='Email'
            />

            <input
                type='password'
                {... register("contrasena", {required: true})}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                placeholder='Contraseña'
            />

                <button type='submit'>Registrar</button>

            </form>
        </div>
    
    );

}

export default RegisterPage