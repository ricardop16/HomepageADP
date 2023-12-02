import axios from "axios";
import { Usuario } from "../models/Usuario";

const API = 'http://localhost:1232/api'
console.log(API)

export const registerRequest = (usuario:Usuario) => axios.post('http://localhost:1232/api/register', usuario)


