import {  RequestHandler} from "express"
import { pool } from "../config/database"

export const getCentrosEducativos: RequestHandler = async(_req ,res) => {
    const [rows] = await pool.query('SELECT * FROM CentroEducativo')
    res.json(
        rows
    )
}

export const getCentroEducativo: RequestHandler = async(req ,res) => {
    const [rows] = await pool.query('SELECT * FROM CentroEducativo WHERE id_centro = ?', [req.params.id])
    res.json(rows)
}


export const createCentroEducativo: RequestHandler = async(req ,res) => {
    const {codigo_centro, CentroEducativo, comunidad, fecha_registro}= req.body
    const [rows]= await pool.query('INSERT INTO CentroEducativo (codigo_centro, CentroEducativo, comunidad, fecha_registro) VALUES (?,?,?, fecha_registro)', [ codigo_centro, CentroEducativo, comunidad, fecha_registro])
    console.log(req.body)
    res.json({
        msg: 'Centro educativo Creado',
        rows
    })
}

export const deleteCentroEducativo: RequestHandler = async(req ,res) => {
    const [rows] = await pool.query('DELETE FROM CentroEducativo WHERE id_Centro = ?', [req.params.id])
    res.json(rows)
}


export const updateCentroEducativo: RequestHandler = async(req ,res) => {
    const {id} = req.params
    const {codigo_centro, CentroEducativo, comunidad, fecha_registro} = req.body
    const [rows] = await pool.query('UPDATE CentroEducativo SET codigo_centro = IFNULL(?,codigo_centro), centroEducativo  = IFNULL(?,centroEducativo),  comunidad = IFNULL(?,comunidad) WHERE id_centro = ?', [codigo_centro, CentroEducativo, comunidad, fecha_registro, id])
    res.json(rows)
}