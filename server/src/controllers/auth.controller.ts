import {  RequestHandler} from "express"
import { pool } from "../config/database"
import bcrypt from 'bcrypt' 
import jwt from "jsonwebtoken"



import Usuario from "../models/Usuario.model"


export const register:RequestHandler = async(req, res) =>{
    const {nombre, apellido, email, contrasena, nivel, fecha_registro}= req.body
    
    bcrypt.hash(contrasena, 10, async (error,hashcontra)=>{
        if (error) throw error
        try{
            const [rows]= await pool.query('INSERT INTO Usuario (nombre, apellido, email, contrasena, nivel, fecha_registro) VALUES (?,?,?,?,?, fecha_registro)', [ nombre, apellido, email, hashcontra, nivel, fecha_registro])
            console.log(rows)
            
            
            return res.status(200).json({
                msg: 'registrando',
                rows
            })
        }
            
            catch (error){
                return res.status(500).json({
                    msg:'something were wrong'
                }
            )}
    })
        

   
}
export const login:RequestHandler = async(req, res) =>{
    const {email, contrasena} = req.body
    const [rows] = await pool.query<Usuario[]>('SELECT * FROM Usuario WHERE email = ?', [email])
    
   
    if (!rows) {
        res.status(400).json({message:'email invalido'})
    }
    else {
        const parsword = rows[0].contrasena
        bcrypt.compare(contrasena, parsword, (error,resultado)=>{
            if (error) throw error
            if (resultado) {

                const token = jwt.sign({
                    email: email,
                }, 'pepito123'
                )

                res.status(200).cookie("token", token).json({message: 'Usuario logeado'})
            }
            

            else{
                res.status(401).json({message: 'contraseña no es valida'})
            }
        })
    }
  
}

export const logout:RequestHandler =(_req,res) => {
    res.cookie("token", " ",
    {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}