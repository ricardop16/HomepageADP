"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateusuario = exports.deleteusuario = exports.createusuario = exports.getusuario = exports.getusuarios = void 0;
const database_1 = require("../config/database");
const getusuarios = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('SELECT * FROM Usuario');
    res.json(rows);
});
exports.getusuarios = getusuarios;
const getusuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('SELECT * FROM Usuario WHERE id_user = ?', [req.params.id]);
    console.log(rows[0].contrasena);
    res.json(rows);
});
exports.getusuario = getusuario;
const createusuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellido, email, contrasena, nivel, fecha_registro } = req.body;
    const [rows] = yield database_1.pool.query('INSERT INTO Usuario (nombre, apellido, email, contrasena, nivel, fecha_registro) VALUES (?,?,?,?,?, fecha_registro)', [nombre, apellido, email, contrasena, nivel, fecha_registro]);
    console.log(rows);
    res.json({
        msg: 'Usuario Creado',
        rows
    });
});
exports.createusuario = createusuario;
const deleteusuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('DELETE FROM Usuario WHERE id_user = ?', [req.params.id]);
    res.json(rows);
});
exports.deleteusuario = deleteusuario;
const updateusuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nombre, apellido, email, contrasena, nivel } = req.body;
    const [rows] = yield database_1.pool.query('UPDATE Usuario SET nombre = IFNULL(?,nombre), apellido  = IFNULL(?,apellido),  email = IFNULL(?,email), contrasena = IFNULL(?,contrasena), nivel = IFNULL(?,nivel) WHERE id_user = ?', [nombre, apellido, email, contrasena, nivel, id]);
    res.json(rows);
});
exports.updateusuario = updateusuario;
