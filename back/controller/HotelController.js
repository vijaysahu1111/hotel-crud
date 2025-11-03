import Hotel from '../model/Hotel.js'

let SaveHotel = async(req , res)=>{
    let result = await Hotel.create(req.body)
    res.send({success : true , result})
}

let GetAllHotel = async(req , res)=>{
    let result = await Hotel.find()
    res.send({success : true , result})
}

let GetByIdHotel = async(req , res)=>{
    // console.log(req.params)
    let id = req.params.id;
    let result = await Hotel.find({_id : id})
    // let result = await Hotel.findById(id)

    // console.log(result);
    res.send({success : true , result : result[0]})
}

let UpadateHotel =async(req , res )=>{
    let id = req.params.id;
    let result = await Hotel.updateMany({_id : id }, req.body)
    res.send({success : true , result})
}

let DeleteHotel = async(req ,res )=>{
    let id = req.params.id;
    let result = await Hotel.deleteMany({_id : id})
    res.send({success : true , result})
}


export {SaveHotel, GetAllHotel, GetByIdHotel, UpadateHotel, DeleteHotel};