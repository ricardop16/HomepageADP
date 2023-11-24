/*
import { Request, Response } from "express";
import Usuario from "../models/Usuario.model";
import UsuarioRepository from "../repositories/Usuario.repository";

export default class UsuarioController {
  async createUsuario(req: Request, res: Response) {
    if (!req.body.email) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    try {
      const Usuario: Usuario = req.body;
      const savedUsuario = await UsuarioRepository.save(Usuario);

      res.status(201).send(savedUsuario);
    } catch (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving tutorials."
      });
    }
  }
  async getUsuario(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);

    try {
      const Usuario = await UsuarioRepository.retrieveById(id);

      if (Usuario) res.status(200).send(Usuario);
      else
        res.status(404).send({
          message: `Cannot find Usuario with id=${id}.`
        });
    } catch (err) {
      res.status(500).send({
        message: `Error retrieving Usuario with id=${id}.`
      });
    }
  }
}
  
*/

import {  RequestHandler} from "express"
import { pool } from "../config/database"
import { RowDataPacket } from "mysql2"
import Usuario from "../models/Usuario.model"

export const getusuarios: RequestHandler = async(_req ,res) => {
    const [rows] = await pool.query('SELECT * FROM Usuario')
    res.json(
        rows
    )
}

export const getusuario: RequestHandler = async(req ,res) => {
    const [rows] = await pool.query<Usuario[]>('SELECT * FROM Usuario WHERE id_user = ?', [req.params.id])
    console.log(rows[0].contrasena)
    res.json(rows)
}

export const createusuario: RequestHandler = async(req ,res) => {
    const {nombre, apellido, email, contrasena, nivel, fecha_registro}= req.body
    const [rows]= await pool.query<RowDataPacket[]>('INSERT INTO Usuario (nombre, apellido, email, contrasena, nivel, fecha_registro) VALUES (?,?,?,?,?, fecha_registro)', [ nombre, apellido, email, contrasena, nivel, fecha_registro])
    console.log(rows)
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