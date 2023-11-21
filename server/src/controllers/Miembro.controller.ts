import {  RequestHandler} from "express"
import { pool } from "../config/database"

export const getMiembros: RequestHandler = async(_req ,res) => {
    const [rows] = await pool.query('SELECT * FROM Miembro')
    res.json(
        rows
    )
}


export const getMiembro: RequestHandler = async(req ,res) => {
    const [rows] = await pool.query('SELECT * FROM Miembro WHERE id_miembro = ?', [req.params.id])
    res.json(rows)
}


export const createMiembro: RequestHandler = async(req ,res) => {
    const {afiliacionadp, cedula, usuario, cargo, nombre, apellido, sexo, fecha_nac, direccion, telefono, grado, CentroEducativo, areaTrabajo, fecha_Nomb, estatus, fecha_registro}= req.body
    const [rows]= await pool.query('INSERT INTO Miembro (afiliacionadp, cedula, usuario, cargo, nombre, apellido, sexo, fecha_nac, direccion, telefono, grado, CentroEducativo, areaTrabajo, fecha_Nomb, estatus, fecha_registro) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [ afiliacionadp, cedula, usuario, cargo, nombre, apellido, sexo, fecha_nac, direccion, telefono, grado, CentroEducativo, areaTrabajo, fecha_Nomb, estatus, fecha_registro])
    console.log(req.body)
    res.json({
        msg: 'miembro Creado',
        rows
    })
}


export const deleteMiembro: RequestHandler = async(req ,res) => {
    const [rows] = await pool.query('DELETE FROM Miembro WHERE id_miembro = ?', [req.params.id])
    res.json(rows)
}


export const updateMiembro: RequestHandler = async(req ,res) => {
    const {id} = req.params
    const {afiliacionadp, cedula, usuario, cargo, nombre, apellido, sexo, fecha_nac, direccion, telefono, grado, CentroEducativo, areaTrabajo, fecha_Nomb, estatus, fecha_registro} = req.body
    const [rows] = await pool.query('UPDATE Miembro SET afiliacionadp = IFNULL(?,afiliacionadp), cedula  = IFNULL(?,cedula),  usuario = IFNULL(?,usuario), cargo = IFNULL(?,cargo), nombre = IFNULL(?,nombre), apellido) WHERE id_miembro = ?', [afiliacionadp, cedula, usuario, cargo, nombre, apellido, sexo, fecha_nac, direccion, telefono, grado, CentroEducativo, areaTrabajo, fecha_Nomb, estatus, fecha_registro, id])
    res.json(rows)
}