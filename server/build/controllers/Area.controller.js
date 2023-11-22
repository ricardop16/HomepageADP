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
exports.updateArea = exports.deleteArea = exports.createArea = exports.getArea = exports.getAreas = void 0;
const database_1 = require("../config/database");
const getAreas = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('SELECT * FROM Area');
    res.json(rows);
});
exports.getAreas = getAreas;
const getArea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('SELECT * FROM Area WHERE id_area = ?', [req.params.id]);
    res.json(rows);
});
exports.getArea = getArea;
const createArea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { area } = req.body;
    const [rows] = yield database_1.pool.query('INSERT INTO Area (area) VALUES (?)', [area]);
    console.log(req.body);
    res.json({
        msg: 'Area Creada',
        rows
    });
});
exports.createArea = createArea;
const deleteArea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('DELETE FROM Area WHERE id_area = ?', [req.params.id]);
    res.json(rows);
});
exports.deleteArea = deleteArea;
const updateArea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { area } = req.body;
    const [rows] = yield database_1.pool.query('UPDATE Area SET area = IFNULL(?,area) WHERE id_area = ?', [area, id]);
    res.json(rows);
});
exports.updateArea = updateArea;
