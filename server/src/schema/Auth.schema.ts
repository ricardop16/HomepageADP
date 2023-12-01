import {z} from 'zod'

export const registerSchema = z.object({
    nombre: z.string({
      required_error: "Nombre es requerido",
    }),
    apellido: z.string({
        required_error: "Apellido es requerido",
      }),
    email: z
      .string({
        required_error: "Email es requerido",
      })
      .email({
        message: "Email no valido",
      }),
    contrasena: z
      .string({
        required_error: "contraseña requerida"
      })
      .min(6, {
        message: "debe contener al menos 6 caracteres",
      }),
  });
  
  export const loginSchema = z.object({
    email: z.string().email(),
    contrasena: z.string(),
  });
