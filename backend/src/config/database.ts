import mongoose, { ConnectOptions } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

// connect mongodb
mongoose.connect(`${process.env.MONGO_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions).then(()=>{
    console.log("Connected to mongodb")
}).catch(err=>console.error(err))