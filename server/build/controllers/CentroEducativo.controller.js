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
exports.updateCentroEducativo = exports.deleteCentroEducativo = exports.createCentroEducativo = exports.getCentroEducativo = exports.getCentrosEducativos = void 0;
const database_1 = require("../config/database");
const getCentrosEducativos = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('SELECT * FROM CentroEducativo');
    res.json(rows);
});
exports.getCentrosEducativos = getCentrosEducativos;
const getCentroEducativo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('SELECT * FROM CentroEducativo WHERE id_centro = ?', [req.params.id]);
    res.json(rows);
});
exports.getCentroEducativo = getCentroEducativo;
const createCentroEducativo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { codigo_centro, CentroEducativo, comunidad, fecha_registro } = req.body;
    const [rows] = yield database_1.pool.query('INSERT INTO CentroEducativo (codigo_centro, CentroEducativo, comunidad, fecha_registro) VALUES (?,?,?, fecha_registro)', [codigo_centro, CentroEducativo, comunidad, fecha_registro]);
    console.log(req.body);
    res.json({
        msg: 'Centro educativo Creado',
        rows
    });
});
exports.createCentroEducativo = createCentroEducativo;
const deleteCentroEducativo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('DELETE FROM CentroEducativo WHERE id_Centro = ?', [req.params.id]);
    res.json(rows);
});
exports.deleteCentroEducativo = deleteCentroEducativo;
const updateCentroEducativo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { codigo_centro, CentroEducativo, comunidad, fecha_registro } = req.body;
    const [rows] = yield database_1.pool.query('UPDATE CentroEducativo SET codigo_centro = IFNULL(?,codigo_centro), centroEducativo  = IFNULL(?,centroEducativo),  comunidad = IFNULL(?,comunidad) WHERE id_centro = ?', [codigo_centro, CentroEducativo, comunidad, fecha_registro, id]);
    res.json(rows);
});
exports.updateCentroEducativo = updateCentroEducativo;
