import {  RequestHandler} from "express"
import { pool } from "../config/database"

export const getAsistencias: RequestHandler = async(_req ,res) => {
    const [rows] = await pool.query('SELECT * FROM Asistencia')
    res.json(
        rows
    )
}


export const getAsistencia: RequestHandler = async(req ,res) => {
    const [rows] = await pool.query('SELECT * FROM Asistencia WHERE id_asistencia= ?', [req.params.id])
    res.json(rows)
}


export const createAsistencia: RequestHandler = async(req ,res) => {
    const {numeroAsamblea, miembro, fecha_registro}= req.body
    const [rows]= await pool.query('INSERT INTO Asistencia (numeroAsamblea, miembro, fecha_registro) VALUES (?,?,?,?,?, fecha_registro)', [ numeroAsamblea, miembro, fecha_registro])
    console.log(req.body)
    res.json({
        msg: 'Usuario Creado',
        rows
    })
}


export const deleteAsistencia: RequestHandler = async(req ,res) => {
    const [rows] = await pool.query('DELETE FROM Asistencia WHERE id_asistencia = ?', [req.params.id])
    res.json(rows)
}


export const updateusuario: RequestHandler = async(req ,res) => {
    const {id} = req.params
    const {numeroAsamblea, miembro, fecha_registro} = req.body
    const [rows] = await pool.query('UPDATE Asistencia SET numeroAsamblea = IFNULL(?,numeroAsamblea), miembro  = IFNULL(?,miembro)  WHERE id_Asistencia = ?', [numeroAsamblea, miembro, fecha_registro, id])
    res.json(rows)
}