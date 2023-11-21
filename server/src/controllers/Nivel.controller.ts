import {  RequestHandler} from "express"
import { pool } from "../config/database"

export const getNiveles: RequestHandler = async(_req ,res) => {
    const [rows] = await pool.query('SELECT * FROM Nivel')
    res.json(
        rows
    )
}


export const getNivel: RequestHandler = async(req ,res) => {
    const [rows] = await pool.query('SELECT * FROM Nivel WHERE id_nivel = ?', [req.params.id])
    res.json(rows)
}


export const createNivel: RequestHandler = async(req ,res) => {
    const {nivel}= req.body
    const [rows]= await pool.query('INSERT INTO Nivel (nivel) VALUES (?)', [nivel])
    console.log(req.body)
    res.json({
        msg: 'Nivel Creado',
        rows
    })
}


export const deleteNivel: RequestHandler = async(req ,res) => {
    const [rows] = await pool.query('DELETE FROM Nivel WHERE id_nivel = ?', [req.params.id])
    res.json(rows)
}


export const updateNivel: RequestHandler = async(req ,res) => {
    const {id} = req.params
    const {nivel} = req.body
    const [rows] = await pool.query('UPDATE Nivel SET nivel = IFNUL(?,nivel)  WHERE id_nivel = ?', [nivel, id])
    res.json(rows)
}