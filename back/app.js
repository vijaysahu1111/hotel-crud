import express from 'express'
import cors from 'cors'
import path from 'path'
import AllRoutes from './routes/AllRoutes.js'
import {PORT} from './config/config.js'

let app = express();

/*---------------For Live Server-------------*/
const root = path.join(path.resolve()+"/dist")
app.use(express.static(root));

/*---------------For Live Server-------------*/

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());
app.use(AllRoutes);

/*---------------For Live Server-------------*/
app.get("/{*splat}",(req ,res)=>{
    // res.send("hello world")
    res.sendFile("index.html",{root});
})

/*---------------For Live Server-------------*/


app.listen(PORT,()=>{
    console.log("Server is running with port",PORT)
})
