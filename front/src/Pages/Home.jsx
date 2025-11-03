import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';

const Home = () => {
    let [allHotel, setAllHotel] = useState([]);
    let [show, setShow] = useState(false);
    let [hotel, setHotel] = useState({});


    let handleClose = ()=>setShow(false)
    let handleOpen = ()=>setShow(true)
        

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/v1/hotel")
            .then(responce => {
                setAllHotel(responce.data.result);
            })
    }, [])
    
    
    let askDelete = (obj)=>{
        setHotel(obj)
        handleOpen()
    } 

    let confDelete = ()=>{
        axios
        .delete("http://localhost:3000/api/v1/hotel/" + hotel._id)
        .then(responce=>{
            console.log(responce.data)
        })
        setAllHotel(prev=>prev.filter(item=>item._id != hotel._id));
        handleClose();
    } 


    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className='text-center'>
                            List of All Hotels
                        </h3>
                        <br />
                        <NavLink to="/add" className="btn btn-info">Add New Hotel</NavLink>
                        <table className="mt-4 table table-hover table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>City</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allHotel.map((item, index) => (
                                        <tr key={item._id}>
                                            <td>{index + 1}</td>
                                            <td>{item.title}</td>
                                            <td>{item.price}</td>
                                            <td>{item.city}</td>
                                            <td><NavLink to={"/edit/"+item._id} className='btn btn-warning btn-sm'>Edit</NavLink></td>
                                            <td><button onClick={()=>askDelete(item)} className='btn btn-danger btn-sm'>Delete</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Deleting {hotel.title} ! </Modal.Title>
                </Modal.Header>
                <Modal.Body>Are You Sure want to delete this {hotel.title}</Modal.Body>
                <Modal.Footer>  
                    <button onClick={handleClose} className='btn btn-info'>Close</button>
                    <button onClick={confDelete} className='btn btn-danger'>Delete</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Home