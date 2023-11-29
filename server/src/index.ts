import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'



import UserRoutes from './routes/usuario.routes'
import MiembroRoutes from './routes/miembro.routes' 
import NivelRoutes from './routes/nivel.routes' 
import AsambleaRoutes from './routes/asamblea.routes'
import AsistenciaRoutes from './routes/asistencia.routes'
import AreaRoutes from './routes/area.routes'
import TrasladoRoutes from './routes/traslado.routes' 
import authRoutes from './routes/auth.routes' 


const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())



app.use('/api', authRoutes)
app.use('/api', UserRoutes)
app.use('/api', MiembroRoutes)
app.use('/api', NivelRoutes)
app.use('/api', AsambleaRoutes)
app.use('/api', AsistenciaRoutes)
app.use('/api', AreaRoutes)
app.use('/api', TrasladoRoutes)



const por = 1232
app.listen(por, () =>  {
console.log('server listening on port Localhost: ${por}')
console.log(por)
}) 