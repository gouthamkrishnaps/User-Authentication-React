import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  console.log(loginData);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginData;
    
    if (!email || !password) {
      swal({
        title: 'Hey..!',
        text: 'Please fill in both fields',
        icon: 'warning',
      });
    } else {
      const existingUsers = JSON.parse(localStorage.getItem("Users")) || [];
      const user = existingUsers.find(user => user.email === email && user.password === password);

      if (user) {
        sessionStorage.setItem("LoggedUser", JSON.stringify(user));
        swal({
          title: 'Welcome back!',
          text: 'You have successfully logged in',
          icon: 'success',
        });
        setTimeout(()=>{
          navigate('/dashboard')
      },2000)// Replace with the appropriate route for your dashboard or home page
      } else {
        swal({
          title: 'Login Failed',
          text: 'Invalid email or password',
          icon: 'error',
        });
      }
    }
  };

  return (
    <div className='flex justify-center items-center flex-col h-full'>
        <h2 className='text-center text-4xl font-semibold mt-2 text-white'>Login</h2>
        <div className='px-12 mt-2'>

            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 mt-2">Email address</label>
            <div className="">
            <input id="email" name="email" type="email" autoComplete="email" value={loginData.email} onChange={(e)=>setLoginData({...loginData,email:e.target.value})} required className="block w-full rounded-full border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Enter your email'/>
            </div>

            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 mt-2">Password</label>
            <div className="">
            <input type='password' id="password" name="password" value={loginData.password} onChange={(e)=>setLoginData({...loginData,password:e.target.value})} required className="block w-full rounded-full border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Enter your password'/>
            </div>

            <div className='buttons py-5 flex gap-5'>
            <button onClick={handleLogin} className='bg-green-600 px-10 py-2 rounded-lg text-zinc-200 font-bold'>Login</button>
            <button className='bg-amber-400 px-10 py-2 rounded-lg text-gray-950 font-bold '>Reset</button>
            </div>

            <div>
                <Link to={'/register'} className='text-blue-700'>Not an existing user ? | Click to Register</Link>
            </div>
        </div>
    </div>
  )
}

export default Login