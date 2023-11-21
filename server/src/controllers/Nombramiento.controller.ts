import {  RequestHandler} from "express"
import { pool } from "../config/database"

export const getNombramientos: RequestHandler = async(_req ,res) => {
    const [rows] = await pool.query('SELECT * FROM Nombramiento')
    res.json(
        rows
    )
}


export const getnombramiento: RequestHandler = async(req ,res) => {
    const [rows] = await pool.query('SELECT * FROM Nombramiento WHERE id_nombramiento = ?', [req.params.id])
    res.json(rows)
}


export const createNombramiento: RequestHandler = async(req ,res) => {
    const {miembro, fecha_inicial, fecha_salida, fecha_registro}= req.body
    const [rows]= await pool.query('INSERT INTO Usuario (miembro, fecha_inicial, fecha_salida, fecha_registro) VALUES (?,?,?, fecha_registro)', [miembro, fecha_inicial, fecha_salida, fecha_registro])
    console.log(req.body)
    res.json({
        msg: 'Usuario Creado',
        rows
    })
}


export const deleteNombramiento: RequestHandler = async(req ,res) => {
    const [rows] = await pool.query('DELETE FROM Nombramiento WHERE id_Nombramiento = ?', [req.params.id])
    res.json(rows)
}


export const updateusuario: RequestHandler = async(req ,res) => {
    const {id} = req.params
    const {miembro, fecha_inicial, fecha_salida, fecha_registro} = req.body
    const [rows] = await pool.query('UPDATE Nombramiento SET miembro = IFNULL(?,miembro), fecha_inicial  = IFNULL(?,fecha_inicial), fecha_salida = IFNULL(?,fecha_salida),  WHERE id_nombramiento = ?', [miembro, fecha_inicial, fecha_salida, fecha_registro, id])
    res.json(rows)
}