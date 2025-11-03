import mongoose from '../db/Connect.js';

let HotelSchema = mongoose.Schema(
    {
        title : String,
        price : Number,
        city : String,
    })

let Hotel = mongoose.model("hotel", HotelSchema)

export default Hotel;
