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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = exports.register = void 0;
const database_1 = require("../config/database");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellido, email, contrasena, nivel, fecha_registro } = req.body;
    bcrypt_1.default.hash(contrasena, 10, (error, hashcontra) => __awaiter(void 0, void 0, void 0, function* () {
        if (error)
            throw error;
        try {
            const [rows] = yield database_1.pool.query('INSERT INTO Usuario (nombre, apellido, email, contrasena, nivel, fecha_registro) VALUES (?,?,?,?,?, fecha_registro)', [nombre, apellido, email, hashcontra, nivel, fecha_registro]);
            console.log(rows);
            return res.status(200).json({
                msg: 'registrando',
                rows
            });
        }
        catch (error) {
            return res.status(500).json({
                msg: 'something were wrong'
            });
        }
    }));
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, contrasena } = req.body;
    const [rows] = yield database_1.pool.query('SELECT * FROM Usuario WHERE email = ?', [email]);
    if (!rows) {
        res.status(400).json({ message: 'email invalido' });
    }
    else {
        const parsword = rows[0].contrasena;
        bcrypt_1.default.compare(contrasena, parsword, (error, resultado) => {
            if (error)
                throw error;
            if (resultado) {
                const token = jsonwebtoken_1.default.sign({
                    email: email,
                }, 'pepito123');
                res.status(200).cookie("token", token).json({ message: 'Usuario logeado' });
            }
            else {
                res.status(401).json({ message: 'contraseña no es valida' });
            }
        });
    }
});
exports.login = login;
const logout = (_req, res) => {
    res.cookie("token", " ", {
        expires: new Date(0)
    });
    return res.sendStatus(200);
};
exports.logout = logout;
