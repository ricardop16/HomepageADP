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
exports.updateTraslado = exports.deleteTraslado = exports.createTraslado = exports.getTraslado = exports.getTraslados = void 0;
const database_1 = require("../config/database");
const getTraslados = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('SELECT * FROM Traslados');
    res.json(rows);
});
exports.getTraslados = getTraslados;
const getTraslado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('SELECT * FROM Traslados  WHERE id_traslado = ?', [req.params.id]);
    res.json(rows);
});
exports.getTraslado = getTraslado;
const createTraslado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { miembro, fechaTraslado, fecha_registro, cargoAnterior, CargoNuevo } = req.body;
    const [rows] = yield database_1.pool.query('INSERT INTO Traslados (miembro, fechaTraslado, fecha_registro, cargoAnterior, CargoNuevo) VALUES (?,?,?,?, fecha_registro)', [miembro, fechaTraslado, fecha_registro, cargoAnterior, CargoNuevo]);
    console.log(req.body);
    res.json({
        msg: 'Usuario Creado',
        rows
    });
});
exports.createTraslado = createTraslado;
const deleteTraslado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('DELETE FROM Traslados WHERE id_traslado = ?', [req.params.id]);
    res.json(rows);
});
exports.deleteTraslado = deleteTraslado;
const updateTraslado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { miembro, fechaTraslado, fecha_registro, cargoAnterior, CargoNuevo } = req.body;
    const [rows] = yield database_1.pool.query('UPDATE Usuario SET miembro = IFNULL(?,miembro), fechaTraslado  = IFNULL(?,fechaTraslado),  fecha_registro = IFNULL(?,fecha_registro), cargoAnterior = IFNULL(?,cargoAnterior), CargoNuevo = IFNULL(?,CargoNuevo) WHERE id_traslado = ?', [miembro, fechaTraslado, fecha_registro, cargoAnterior, CargoNuevo, id]);
    res.json(rows);
});
exports.updateTraslado = updateTraslado;
