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
exports.updateAsamblea = exports.deleteAsamblea = exports.createAsamblea = exports.getAsamblea = exports.getAsambleas = void 0;
const database_1 = require("../config/database");
const getAsambleas = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('SELECT * FROM Asamblea');
    res.json(rows);
});
exports.getAsambleas = getAsambleas;
const getAsamblea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('SELECT * FROM Asamblea WHERE id_asamblea = ?', [req.params.id]);
    res.json(rows);
});
exports.getAsamblea = getAsamblea;
const createAsamblea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuario, fechaProgramada, direccion, NumeroConvocatoria, tipoAsamblea, directivaConvocante, estatusAsamblea, fecha_registro } = req.body;
    const [rows] = yield database_1.pool.query('INSERT INTO Asamblea (usuario, fechaProgramada, direccion, NumeroConvocatoria, tipoAsamblea, directivaConvocante,estatusAsamblea, fecha_registro) VALUES (?,?,?,?,?,?,?,?)', [usuario, fechaProgramada, direccion, NumeroConvocatoria, tipoAsamblea, directivaConvocante, estatusAsamblea, fecha_registro]);
    console.log(req.body);
    res.json({
        msg: 'Asamblea Creada',
        rows
    });
});
exports.createAsamblea = createAsamblea;
const deleteAsamblea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('DELETE FROM Asamblea WHERE id_asamblea = ?', [req.params.id]);
    res.json(rows);
});
exports.deleteAsamblea = deleteAsamblea;
const updateAsamblea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { usuario, fechaProgramada, direccion, NumeroConvocatoria, tipoAsamblea, directivaConvocante, estatusAsamblea, fecha_registro } = req.body;
    const [rows] = yield database_1.pool.query('UPDATE Asamblea SET usuario = IFNUL(?,usuario), fechaProgramada = IFNUL(?,fechaProgramada), direccion = IFNUL(?,direccion),NumeroConvocatoria =IFNUL(?,NumeroConvocatoria), tipoAsamblea= IFNUL(?,tipoAsamblea), directivaConvocante = IFNUL(?,directivaConvocante), estatusAsamblea = IFNUL(?,estatusAsamblea), fecha_registro = IFNUL(?,fecha_registro) WHERE id_asamblea = ?', [usuario, fechaProgramada, direccion, NumeroConvocatoria, tipoAsamblea, directivaConvocante, estatusAsamblea, fecha_registro, id]);
    res.json(rows);
});
exports.updateAsamblea = updateAsamblea;
