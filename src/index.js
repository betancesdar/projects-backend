import 'dotenv/config'
import './config/dbConfig.js'
import express from 'express'

//Routes 
import indexRouter from './routes/index.routes.js'

const app = express();



//Middlewares 


//Route in use
app.use('/api/v1', indexRouter);


const PORT = process.env.PORT || 3500;
app.listen(PORT, ()=> {
    console.log('🎇🎆🎈http://localhost:' + PORT + "/api/v1")
})


