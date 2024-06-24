import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function Register() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: ""
  });
  console.log(userData);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password } = userData;
    
    if (!username || !email || !password) {
      swal({
        title: 'Hey..!',
        text: 'Please fill the form completely',
        icon: 'warning',
      });
    } else {
      const existingUsers = JSON.parse(localStorage.getItem("Users")) || [];
      const userExists = existingUsers.some(user => user.email === email);

      if (userExists) {
        swal({
          title: 'Oh sorry..😣!',
          text: 'User with this email already exists',
          icon: 'error',
        });
      } 
      else {
        existingUsers.push(userData);
        localStorage.setItem("Users", JSON.stringify(existingUsers));
        swal({
          title: 'Good Job 😍',
          text: 'User is successfully registered',
          icon: 'success',
        });
        setUserData({
          username: "",
          email: "",
          password: ""
        });
        navigate('/');
      }
    }
  };
  return (
    <div className='flex justify-center items-center flex-col h-full'>
        <h2 className='text-center font-semibold mt-2 text-4xl text-white'>Register</h2>
        <div className='px-12 mt-2'>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 mt-2">Username</label>
            <div className="">
            <input id="username" name="username" type="username" value={userData.username} onChange={(e)=>setUserData({...userData,username:e.target.value})} required className="block w-full rounded-full border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Enter your username'/>
            </div>

            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 mt-2">Email address</label>
            <div className="">
            <input id="email" name="email" type="email" autoComplete="email" value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})} required className="block w-full rounded-full border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Enter your email'/>
            </div>

            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 mt-2">Password</label>
            <div className="">
            <input id="password" name="password" type="password" value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})} required className="block w-full rounded-full border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Enter your password'/>
            </div>

            <div className='buttons py-5 flex gap-5'>
                <button onClick={handleRegister} className='bg-green-600 px-10 py-2 rounded-lg text-zinc-200 font-bold'>Register</button>
                <button className='bg-amber-400 px-10 py-2 rounded-lg text-gray-950 font-bold '>Reset</button>
            </div>
            <div>
                <Link to={'/'} className='text-blue-700'>Already a user ? | Click to login</Link>
            </div>
        </div>
    </div>
  )
}

export default Register