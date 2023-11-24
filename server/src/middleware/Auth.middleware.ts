import { RequestHandler } from 'express'



export interface IPayload {
    _id: string;
    iat: number;
} 

export const AuthRequired:RequestHandler = (req, res, next) => {
   return
    try {
        const token = req.header('token');
        if (!token) return res.status(401).json('Access Denied');
         

        next();
    } catch (e) {
        return res.status(400).send('Invalid Token');
    }
}