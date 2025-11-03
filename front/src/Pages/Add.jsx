import React, { useEffect, useState } from 'react'
import { NavLink , useNavigate, useParams} from 'react-router-dom'
import {useFormik} from 'formik'
import axios from 'axios'

const Add = () => {
    let navigate = useNavigate();
    let param = useParams();
    let [hotel, setHotel] = useState({
        title : "",
        price : "",
        city : ""
    })

    useEffect(()=>{
        if(param.id){
            axios
            .get("http://localhost:3000/api/v1/hotel/"+param.id)
             .then(response=>{
                setHotel(response.data.result)
            })
        }
    },[param.id])


    let HotelFrm = useFormik({
        initialValues : hotel,
        enableReinitialize : true,
        onSubmit : (formData)=>{
          if(param.id){
              axios
            .put("http://localhost:3000/api/v1/hotel/"+param.id, formData)
            .then(response=>{
                navigate("/")
            })
          }else{
              axios
            .post("http://localhost:3000/api/v1/hotel", formData)
            .then(response=>{
                // console.log(response.data)
                navigate("/")
            })
          }
        }

    })

    return (
        <>
            <div className="container my-5">
                <form onSubmit={HotelFrm.handleSubmit}>
                    <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h3 className="text-center">{param.id ? "Update" : "Add New"} Hotel</h3>
                        <NavLink to="/" className="btn btn-info">Back</NavLink>
                       <br />
                        <div className="my-2">
                            <label>Hotel Title</label>
                            <input type="text" name='title' onChange={HotelFrm.handleChange} value={HotelFrm.values.title} className='form-control' />
                        </div>
                        <div className="my-2">
                            <label>Price</label>
                            <input type="text" name='price'  onChange={HotelFrm.handleChange} value={HotelFrm.values.price} className='form-control' />
                        </div>
                        <div className="my-2">
                            <label>City</label>
                            <input type="text" name='city'  onChange={HotelFrm.handleChange} value={HotelFrm.values.city} className='form-control' />
                        </div>
                        <div className="my-3 d-grid">
                           <button className='btn btn-primary' type='submit'>{param.id ? "Update" : "Add"}</button>
                        </div>
                    </div>

                </div>
                </form>
            </div>
        </>
    )
}

export default Add
