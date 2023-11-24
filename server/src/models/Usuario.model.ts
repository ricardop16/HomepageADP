import {RowDataPacket } from "mysql2"

export default interface Usuario extends RowDataPacket {
    apellido?: string;
    email?: string;
    contrasena: string ;
    fecha_registro?: Date;
    id_user?: number;
    nivel?: number;
    nombre?: string;
}