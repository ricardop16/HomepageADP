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
exports.updateNivel = exports.deleteNivel = exports.createNivel = exports.getNivel = exports.getNiveles = void 0;
const database_1 = require("../config/database");
const getNiveles = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('SELECT * FROM Nivel');
    res.json(rows);
});
exports.getNiveles = getNiveles;
const getNivel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('SELECT * FROM Nivel WHERE id_nivel = ?', [req.params.id]);
    res.json(rows);
});
exports.getNivel = getNivel;
const createNivel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nivel } = req.body;
    const [rows] = yield database_1.pool.query('INSERT INTO Nivel (nivel) VALUES (?)', [nivel]);
    console.log(req.body);
    res.json({
        msg: 'Nivel Creado',
        rows
    });
});
exports.createNivel = createNivel;
const deleteNivel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('DELETE FROM Nivel WHERE id_nivel = ?', [req.params.id]);
    res.json(rows);
});
exports.deleteNivel = deleteNivel;
const updateNivel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nivel } = req.body;
    const [rows] = yield database_1.pool.query('UPDATE Nivel SET nivel = IFNUL(?,nivel)  WHERE id_nivel = ?', [nivel, id]);
    res.json(rows);
});
exports.updateNivel = updateNivel;
