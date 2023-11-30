import { useForm } from 'react-hook-form'

function RegisterPage(){

    const { register, handleSubmit} = useForm();

    return (
        <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
            <form 
                onSubmit={handleSubmit((values) => {
                    console.log(values)
                })}
            >

            <input
                {... register("nombre", {required: true})}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                placeholder='Nombre'
            />

            <input
                {... register("apellido", {required: true})}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                placeholder='Apellido'
            />

            <input
                {... register("email", {required: true})}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                placeholder='Email'
            />

            <input
                {... register("contrsena", {required: true})}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                placeholder='Contraseña'
            />

                <button type='submit'>Registrar</button>

            </form>
        </div>
    
    );

}

export default RegisterPage