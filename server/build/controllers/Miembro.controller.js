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
exports.updateMiembro = exports.deleteMiembro = exports.createMiembro = exports.getMiembro = exports.getMiembros = void 0;
const database_1 = require("../config/database");
const getMiembros = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('SELECT * FROM Miembro');
    res.json(rows);
});
exports.getMiembros = getMiembros;
const getMiembro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('SELECT * FROM Miembro WHERE id_miembro = ?', [req.params.id]);
    res.json(rows);
});
exports.getMiembro = getMiembro;
const createMiembro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { afiliacionadp, cedula, usuario, cargo, nombre, apellido, sexo, fecha_nac, direccion, telefono, grado, CentroEducativo, areaTrabajo, fecha_Nomb, estatus, fecha_registro } = req.body;
    const [rows] = yield database_1.pool.query('INSERT INTO Miembro (afiliacionadp, cedula, usuario, cargo, nombre, apellido, sexo, fecha_nac, direccion, telefono, grado, CentroEducativo, areaTrabajo, fecha_Nomb, estatus, fecha_registro) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [afiliacionadp, cedula, usuario, cargo, nombre, apellido, sexo, fecha_nac, direccion, telefono, grado, CentroEducativo, areaTrabajo, fecha_Nomb, estatus, fecha_registro]);
    console.log(req.body);
    res.json({
        msg: 'miembro Creado',
        rows
    });
});
exports.createMiembro = createMiembro;
const deleteMiembro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('DELETE FROM Miembro WHERE id_miembro = ?', [req.params.id]);
    res.json(rows);
});
exports.deleteMiembro = deleteMiembro;
const updateMiembro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { afiliacionadp, cedula, usuario, cargo, nombre, apellido, sexo, fecha_nac, direccion, telefono, grado, CentroEducativo, areaTrabajo, fecha_Nomb, estatus, fecha_registro } = req.body;
    const [rows] = yield database_1.pool.query('UPDATE Miembro SET afiliacionadp = IFNULL(?,afiliacionadp), cedula  = IFNULL(?,cedula),  usuario = IFNULL(?,usuario), cargo = IFNULL(?,cargo), nombre = IFNULL(?,nombre), apellido) WHERE id_miembro = ?', [afiliacionadp, cedula, usuario, cargo, nombre, apellido, sexo, fecha_nac, direccion, telefono, grado, CentroEducativo, areaTrabajo, fecha_Nomb, estatus, fecha_registro, id]);
    res.json(rows);
});
exports.updateMiembro = updateMiembro;
