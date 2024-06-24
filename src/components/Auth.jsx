import React from 'react'
import '../App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import animation1 from '../assets/Animation - 1701613384620 (2).json'
import Lottie from 'lottie-react';

function Auth() {
  return (
    <div className='auth-cmpnt w-full flex justify-center items-center'>{/* md:w-80 md:h-4/6*/}
        <div className='p-3 grid grid-cols-1 lg:grid-cols-2  gap-2 w-80 lg:w-9/12 lg:h-4/6 auth-div rounded-lg shadow-xl '>
            <div className='flex justify-center items-center '>
                <Lottie loop={'0'} animationData={animation1}  className='w-full px-3'/>
            </div>
            <div className='grid2-item'>
                <Routes>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/' element={<Login/>}/>
                </Routes>
            </div>
        </div>
    </div>
  )
}

export default Auth