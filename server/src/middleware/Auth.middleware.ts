import { RequestHandler } from 'express'
import jwt from 'jsonwebtoken' 


export interface IPayload {
    _email:string;
    user: number;
    iat: number;
} 

export const AuthRequired:RequestHandler = (req, res, next) => {
    try {
        const token = req.cookies['token'];
        console.log(token);
        if (!token) return res.status(401).json(' no Token, Access Denied');
        
        const payload = jwt.verify(token, 'pepito123') as IPayload;
       
        req.body = payload.user
        console.log(payload.user)
        return next() 
      
    } catch (e) {
        console.log(e)
        return res.status(400).send('Invalid Token');
    }
}