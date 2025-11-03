import express from 'express'
import cors from 'cors'
import AllRoutes from './routes/AllRoutes.js'
import {PORT} from './config/config.js'

let app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());
app.use(AllRoutes);

app.listen(PORT,()=>{
    console.log("Server is running with port",PORT)
})
