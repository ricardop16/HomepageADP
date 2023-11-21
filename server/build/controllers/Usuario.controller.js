"use strict";
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
    res.json(rows);
});
exports.getusuario = getusuario;
const createusuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellido, email, contrasena, nivel, fecha_registro } = req.body;
    const [rows] = yield database_1.pool.query('INSERT INTO Usuario (nombre, apellido, email, contrasena, nivel, fecha_registro) VALUES (?,?,?,?,?, fecha_registro)', [nombre, apellido, email, contrasena, nivel, fecha_registro]);
    console.log(req.body);
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
