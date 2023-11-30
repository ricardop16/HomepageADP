"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.registerSchema = void 0;
const zod_1 = require("zod");
exports.registerSchema = zod_1.z.object({
    nombre: zod_1.z.string({
        required_error: "Nombre es requerido",
    }),
    apellido: zod_1.z.string({
        required_error: "Apellido es requerido",
    }),
    email: zod_1.z
        .string({
        required_error: "Email es requerido",
    })
        .email({
        message: "Email no valido",
    }),
    contrasena: zod_1.z
        .string({
        required_error: "contraseña requerida"
    })
        .min(6, {
        message: "debe contener al menos 6 caracteres",
    }),
});
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string().email().min(1),
    contrasena: zod_1.z.string().min(6),
});
