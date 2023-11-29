"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRequired = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AuthRequired = (req, res, next) => {
    try {
        const token = req.cookies['token'];
        console.log(token);
        if (!token)
            return res.status(401).json(' no Token, Access Denied');
        const payload = jsonwebtoken_1.default.verify(token, 'pepito123');
        req.body = payload.user;
        console.log(payload.user);
        return next();
    }
    catch (e) {
        console.log(e);
        return res.status(400).send('Invalid Token');
    }
};
exports.AuthRequired = AuthRequired;
