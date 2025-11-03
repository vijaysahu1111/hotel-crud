import express from 'express';
import {SaveHotel, GetAllHotel, GetByIdHotel, UpadateHotel, DeleteHotel} from '../controller/HotelController.js';

let routes = express.Router();

routes.get("/", GetAllHotel)
routes.get("/:id", GetByIdHotel)
routes.post("/",SaveHotel)
routes.put("/:id", UpadateHotel)
routes.delete("/:id", DeleteHotel)

export default routes;



