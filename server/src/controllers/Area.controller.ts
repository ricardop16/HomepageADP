import {  RequestHandler} from "express"
import { pool } from "../config/database"

export const getAreas: RequestHandler = async(_req ,res) => {
    const [rows] = await pool.query('SELECT * FROM Area')
    res.json(
        rows
    )
}


export const getArea: RequestHandler = async(req ,res) => {
    const [rows] = await pool.query('SELECT * FROM Area WHERE id_area = ?', [req.params.id])
    res.json(rows)
}


export const createArea: RequestHandler = async(req ,res) => {
    const {area}= req.body
    const [rows]= await pool.query('INSERT INTO Area (area) VALUES (?)', [ area])
    console.log(req.body)
    res.json({
        msg: 'Area Creada',
        rows
    })
}


export const deleteArea: RequestHandler = async(req ,res) => {
    const [rows] = await pool.query('DELETE FROM Area WHERE id_area = ?', [req.params.id])
    res.json(rows)
}


export const updateArea: RequestHandler = async(req ,res) => {
    const {id} = req.params
    const {area} = req.body
    const [rows] = await pool.query('UPDATE Area SET area = IFNULL(?,area) WHERE id_area = ?', [area,id])
    res.json(rows)
}