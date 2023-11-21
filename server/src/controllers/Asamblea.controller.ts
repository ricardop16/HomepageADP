import {  RequestHandler} from "express"
import { pool } from "../config/database"

export const getAsambleas: RequestHandler = async(_req ,res) => {
    const [rows] = await pool.query('SELECT * FROM Asamblea')
    res.json(
        rows
    )
}


export const getAsamblea: RequestHandler = async(req ,res) => {
    const [rows] = await pool.query('SELECT * FROM Asamblea WHERE id_asamblea = ?', [req.params.id])
    res.json(rows)
}


export const createAsamblea: RequestHandler = async(req ,res) => {
    const {usuario, fechaProgramada, direccion, NumeroConvocatoria, tipoAsamblea, directivaConvocante,estatusAsamblea, fecha_registro}= req.body
    const [rows]= await pool.query('INSERT INTO Asamblea (usuario, fechaProgramada, direccion, NumeroConvocatoria, tipoAsamblea, directivaConvocante,estatusAsamblea, fecha_registro) VALUES (?,?,?,?,?,?,?,?)', [usuario, fechaProgramada, direccion, NumeroConvocatoria, tipoAsamblea, directivaConvocante,estatusAsamblea, fecha_registro])
    console.log(req.body)   
    res.json({
        msg: 'Asamblea Creada',
        rows
    })
}


export const deleteAsamblea: RequestHandler = async(req ,res) => {
    const [rows] = await pool.query('DELETE FROM Asamblea WHERE id_asamblea = ?', [req.params.id])
    res.json(rows)
}


export const updateAsamblea: RequestHandler = async(req ,res) => {
    const {id} = req.params
    const {usuario, fechaProgramada, direccion, NumeroConvocatoria, tipoAsamblea, directivaConvocante,estatusAsamblea, fecha_registro} = req.body
    const [rows] = await pool.query('UPDATE Asamblea SET usuario = IFNUL(?,usuario), fechaProgramada = IFNUL(?,fechaProgramada), direccion = IFNUL(?,direccion),NumeroConvocatoria =IFNUL(?,NumeroConvocatoria), tipoAsamblea= IFNUL(?,tipoAsamblea), directivaConvocante = IFNUL(?,directivaConvocante), estatusAsamblea = IFNUL(?,estatusAsamblea), fecha_registro = IFNUL(?,fecha_registro) WHERE id_asamblea = ?', [usuario, fechaProgramada, direccion, NumeroConvocatoria, tipoAsamblea, directivaConvocante,estatusAsamblea, fecha_registro, id])
    res.json(rows)
}   