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
exports.updateusuario = exports.deleteNombramiento = exports.createNombramiento = exports.getnombramiento = exports.getNombramientos = void 0;
const database_1 = require("../config/database");
const getNombramientos = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('SELECT * FROM Nombramiento');
    res.json(rows);
});
exports.getNombramientos = getNombramientos;
const getnombramiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('SELECT * FROM Nombramiento WHERE id_nombramiento = ?', [req.params.id]);
    res.json(rows);
});
exports.getnombramiento = getnombramiento;
const createNombramiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { miembro, fecha_inicial, fecha_salida, fecha_registro } = req.body;
    const [rows] = yield database_1.pool.query('INSERT INTO Usuario (miembro, fecha_inicial, fecha_salida, fecha_registro) VALUES (?,?,?, fecha_registro)', [miembro, fecha_inicial, fecha_salida, fecha_registro]);
    console.log(req.body);
    res.json({
        msg: 'Usuario Creado',
        rows
    });
});
exports.createNombramiento = createNombramiento;
const deleteNombramiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('DELETE FROM Nombramiento WHERE id_Nombramiento = ?', [req.params.id]);
    res.json(rows);
});
exports.deleteNombramiento = deleteNombramiento;
const updateusuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { miembro, fecha_inicial, fecha_salida, fecha_registro } = req.body;
    const [rows] = yield database_1.pool.query('UPDATE Nombramiento SET miembro = IFNULL(?,miembro), fecha_inicial  = IFNULL(?,fecha_inicial), fecha_salida = IFNULL(?,fecha_salida),  WHERE id_nombramiento = ?', [miembro, fecha_inicial, fecha_salida, fecha_registro, id]);
    res.json(rows);
});
exports.updateusuario = updateusuario;
