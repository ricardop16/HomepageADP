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
exports.updateusuario = exports.deleteAsistencia = exports.createAsistencia = exports.getAsistencia = exports.getAsistencias = void 0;
const database_1 = require("../config/database");
const getAsistencias = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('SELECT * FROM Asistencia');
    res.json(rows);
});
exports.getAsistencias = getAsistencias;
const getAsistencia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('SELECT * FROM Asistencia WHERE id_asistencia= ?', [req.params.id]);
    res.json(rows);
});
exports.getAsistencia = getAsistencia;
const createAsistencia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { numeroAsamblea, miembro, fecha_registro } = req.body;
    const [rows] = yield database_1.pool.query('INSERT INTO Asistencia (numeroAsamblea, miembro, fecha_registro) VALUES (?,?,?,?,?, fecha_registro)', [numeroAsamblea, miembro, fecha_registro]);
    console.log(req.body);
    res.json({
        msg: 'Usuario Creado',
        rows
    });
});
exports.createAsistencia = createAsistencia;
const deleteAsistencia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('DELETE FROM Asistencia WHERE id_asistencia = ?', [req.params.id]);
    res.json(rows);
});
exports.deleteAsistencia = deleteAsistencia;
const updateusuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { numeroAsamblea, miembro, fecha_registro } = req.body;
    const [rows] = yield database_1.pool.query('UPDATE Asistencia SET numeroAsamblea = IFNULL(?,numeroAsamblea), miembro  = IFNULL(?,miembro)  WHERE id_Asistencia = ?', [numeroAsamblea, miembro, fecha_registro, id]);
    res.json(rows);
});
exports.updateusuario = updateusuario;
