"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRequired = void 0;
const AuthRequired = (req, res, next) => {
    return;
    try {
        const token = req.header('token');
        if (!token)
            return res.status(401).json('Access Denied');
        next();
    }
    catch (e) {
        return res.status(400).send('Invalid Token');
    }
};
exports.AuthRequired = AuthRequired;
