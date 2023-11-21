import {  RequestHandler} from "express"
import { pool } from "../config/database"

export const getTraslados: RequestHandler = async(_req ,res) => {
    const [rows] = await pool.query('SELECT * FROM Traslados')
    res.json(
        rows
    )
}


export const getTraslado: RequestHandler = async(req ,res) => {
    const [rows] = await pool.query('SELECT * FROM Traslados  WHERE id_traslado = ?', [req.params.id])
    res.json(rows)
}


export const createTraslado: RequestHandler = async(req ,res) => {
    const {miembro, fechaTraslado, fecha_registro, cargoAnterior, CargoNuevo}= req.body
    const [rows]= await pool.query('INSERT INTO Traslados (miembro, fechaTraslado, fecha_registro, cargoAnterior, CargoNuevo) VALUES (?,?,?,?, fecha_registro)', [miembro, fechaTraslado, fecha_registro, cargoAnterior, CargoNuevo])
    console.log(req.body)
    res.json({
        msg: 'Usuario Creado',
        rows
    })
}


export const deleteTraslado: RequestHandler = async(req ,res) => {
    const [rows] = await pool.query('DELETE FROM Traslados WHERE id_traslado = ?', [req.params.id])
    res.json(rows)
}


export const updateTraslado: RequestHandler = async(req ,res) => {
    const {id} = req.params
    const {miembro, fechaTraslado, fecha_registro, cargoAnterior, CargoNuevo} = req.body
    const [rows] = await pool.query('UPDATE Usuario SET miembro = IFNULL(?,miembro), fechaTraslado  = IFNULL(?,fechaTraslado),  fecha_registro = IFNULL(?,fecha_registro), cargoAnterior = IFNULL(?,cargoAnterior), CargoNuevo = IFNULL(?,CargoNuevo) WHERE id_traslado = ?', [miembro, fechaTraslado, fecha_registro, cargoAnterior, CargoNuevo, id])
    res.json(rows)
}