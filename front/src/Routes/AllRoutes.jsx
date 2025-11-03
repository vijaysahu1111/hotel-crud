import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Add from '../Pages/Add'

const AllRoutes = () => {
  return (
        <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/add' element={<Add/>}/>
            <Route path='/edit/:id' element={<Add/>}/>
        </Routes>
        </>
)
}

export default AllRoutes