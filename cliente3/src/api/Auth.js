import axios from "./axios";

export const registerRequest = (usuario) => axios.post('/register', usuario)
export const loginRequest = (usuario) => axios.post('/login', usuario)
export const verifyTokenRequest = () => axios.get('/verify')