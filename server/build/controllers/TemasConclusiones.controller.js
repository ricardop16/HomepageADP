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
exports.updateTema = exports.deleteTema = exports.createTema = exports.getTema = exports.getTemas = void 0;
const database_1 = require("../config/database");
const getTemas = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('SELECT * FROM temas_conclusiones');
    res.json(rows);
});
exports.getTemas = getTemas;
const getTema = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('SELECT * FROM temas_conclusiones WHERE id_tema = ?', [req.params.id]);
    res.json(rows);
});
exports.getTema = getTema;
const createTema = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { numeroAsamblea, miembro, temaTratado, conclusion, fecha_registro } = req.body;
    const [rows] = yield database_1.pool.query('INSERT INTO temas_conclusiones(numeroAsamblea, miembro, temaTratado, conclusion, fecha_registro) VALUES (?,?,?,?, fecha_registro)', [numeroAsamblea, miembro, temaTratado, conclusion, fecha_registro]);
    console.log(req.body);
    res.json({
        msg: 'Creado',
        rows
    });
});
exports.createTema = createTema;
const deleteTema = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('DELETE FROM temas_conclusiones WHERE id_tema = ?', [req.params.id]);
    res.json(rows);
});
exports.deleteTema = deleteTema;
const updateTema = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { numeroAsamblea, miembro, temaTratado, conclusion, fecha_registro } = req.body;
    const [rows] = yield database_1.pool.query('UPDATE temas_conclusiones SET NumeroAsamblea = IFNULL(?,numeroAsamblea), miembro  = IFNULL(?,temaTratado),  Conclusion = IFNULL(?,Conclusion) WHERE id_tema = ?', [numeroAsamblea, miembro, temaTratado, conclusion, fecha_registro, id]);
    res.json(rows);
});
exports.updateTema = updateTema;
