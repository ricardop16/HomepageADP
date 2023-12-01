
export interface Usuario  { 
    apellido: string | null;
    email: string | null;
    contrasena: string | null;
    fecha_registro?: Date | null;
    id_user?: number | null;
    nivel?: number | null;
    nombre: string | null;
}