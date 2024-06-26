import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import swal from 'sweetalert'

function Dashboard() {
    const navigate = useNavigate();

    const user = sessionStorage.getItem("LoggedUser")
    if (!user) {
        window.location="/"
    }
    const logout = ()=>{
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to logout from Mykare health?",
            icon: "warning",
            dangerMode: true,
        })
        .then(loginout => {
        if (loginout) {
            sessionStorage.removeItem("LoggedUser")
            navigate('/')
            swal("Logged out!", "Your are successfully logged out of the website!", "success");
        }
        });
        
    }

    const [isAdmin , setIsAdmin] = useState(false)
    const checkAdmin = ()=>{
    //e.preventDefault()
    let AdminEmail = JSON.parse(sessionStorage.getItem("LoggedUser"))
    console.log(AdminEmail);
    if(AdminEmail.email == "admin@gmail.com"){
        setIsAdmin(true)
    }
    }

    useEffect(()=>{
        checkAdmin()
      },[])
  return (
    <div className='grid grid-rows-2 md:grid-cols-3 bg-slate-50 md:h-screen '>
        <div className='p-5 flex gap-2 items-center flex-col border-b-8 md:border-b-0 md:border-e-8 border-x-gray-700 bg-slate-900 h-full md:h-screen '>
            <h1 className=' text-white text-4xl mt-5 font-semibold'> Mykare Health <i class="fa-solid fa-stethoscope"></i></h1>
            <div className='profile flex justify-center items-center flex-col float-start'>
                <img className=' mt-5' src="https://mykarehealth.com/partners/img2.png" alt="" width={'200px'} height={'200px'}/>
    
                <h4 className=' text-white mt-4 text-2xl'>Your smiles are the scale of our success</h4>
                <h5 className='profle-desig text-gray-600  mt-1'>Consult With The Finest Doctors In Your City</h5>
            </div>
            <div className="flex justify-center items-center flex-col mt-5">
                {isAdmin?
                <div className='flex justify-center flex-col items-center'>
                    <h3 className='font-bold text-4xl text-white'><i class="fa-solid fa-user-tie"></i> Welcome Admin</h3>
                    <Link to={'users'} className='text-yellow-300 text-2xl font-bold link-tag mt-2'><i class="fa-solid fa-users"></i> Manage Users</Link>
                </div>:null
                }
                    <button onClick={logout} className='mt-5 px-3 py-1.5 bg-red-600 text-white rounded-lg shadow-lg font-semibold'>Logout</button>

            </div>
        </div>
        <div className='flex justify-center items-center flex-col md:col-span-2 md:h-screen'>
            <Routes>
                <Route path='' element={<Home/>} />
                <Route path='users' element={<Users/>} />
            </Routes>
        </div>
    </div>
  )
}

export default Dashboard