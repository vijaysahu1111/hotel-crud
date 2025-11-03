import express from 'express'

import HotelRoutes from './HotelRoutes.js' 

let routes = express.Router();

routes.use("/api/v1/hotel", HotelRoutes);

export default routes;
