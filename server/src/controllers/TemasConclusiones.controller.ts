import {  RequestHandler} from "express"
import { pool } from "../config/database"

export const getTemas: RequestHandler = async(_req ,res) => {
    const [rows] = await pool.query('SELECT * FROM temas_conclusiones')
    res.json(
        rows
    )
}


export const getTema: RequestHandler = async(req ,res) => {
    const [rows] = await pool.query('SELECT * FROM temas_conclusiones WHERE id_tema = ?', [req.params.id])
    res.json(rows)
}


export const createTema: RequestHandler = async(req ,res) => {
    const {numeroAsamblea, miembro, temaTratado, conclusion, fecha_registro}= req.body
    const [rows]= await pool.query('INSERT INTO temas_conclusiones(numeroAsamblea, miembro, temaTratado, conclusion, fecha_registro) VALUES (?,?,?,?, fecha_registro)', [ numeroAsamblea, miembro, temaTratado, conclusion, fecha_registro])
    console.log(req.body)
    res.json({
        msg: 'Creado',
        rows
    })
}


export const deleteTema: RequestHandler = async(req ,res) => {
    const [rows] = await pool.query('DELETE FROM temas_conclusiones WHERE id_tema = ?', [req.params.id])
    res.json(rows)
}


export const updateTema: RequestHandler = async(req ,res) => {
    const {id} = req.params
    const {numeroAsamblea, miembro, temaTratado, conclusion, fecha_registro} = req.body
    const [rows] = await pool.query('UPDATE temas_conclusiones SET NumeroAsamblea = IFNULL(?,numeroAsamblea), miembro  = IFNULL(?,temaTratado),  Conclusion = IFNULL(?,Conclusion) WHERE id_tema = ?', [numeroAsamblea, miembro, temaTratado, conclusion, fecha_registro, id])
    res.json(rows)
}