import express, {Request, Response} from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import morgan from 'morgan'
import './config/database'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(morgan('dev'))


app.get('/', (req: Request, res:Response)=> {
    res.send("Hello World")
})

app.listen(process.env.PORT, () => {console.log(`Server running on port ${process.env.PORT}`)})