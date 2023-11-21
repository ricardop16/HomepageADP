import {  RequestHandler} from "express"
import { pool } from "../config/database"

export const getusuarios: RequestHandler = async(_req ,res) => {
    const [rows] = await pool.query('SELECT * FROM Usuario')
    res.json(
        rows
    )
}


export const getusuario: RequestHandler = async(req ,res) => {
    const [rows] = await pool.query('SELECT * FROM Usuario WHERE id_user = ?', [req.params.id])
    res.json(rows)
}


export const createusuario: RequestHandler = async(req ,res) => {
    const {nombre, apellido, email, contrasena, nivel, fecha_registro}= req.body
    const [rows]= await pool.query('INSERT INTO Usuario (nombre, apellido, email, contrasena, nivel, fecha_registro) VALUES (?,?,?,?,?, fecha_registro)', [ nombre, apellido, email, contrasena, nivel, fecha_registro])
    console.log(req.body)
    res.json({
        msg: 'Usuario Creado',
        rows
    })
}


export const deleteusuario: RequestHandler = async(req ,res) => {
    const [rows] = await pool.query('DELETE FROM Usuario WHERE id_user = ?', [req.params.id])
    res.json(rows)
}


export const updateusuario: RequestHandler = async(req ,res) => {
    const {id} = req.params
    const {nombre, apellido, email, contrasena,nivel} = req.body
    const [rows] = await pool.query('UPDATE Usuario SET nombre = IFNULL(?,nombre), apellido  = IFNULL(?,apellido),  email = IFNULL(?,email), contrasena = IFNULL(?,contrasena), nivel = IFNULL(?,nivel) WHERE id_user = ?', [nombre,apellido,email,contrasena,nivel, id])
    res.json(rows)
}