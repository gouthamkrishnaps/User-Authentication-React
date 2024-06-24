import React, { useEffect, useState } from 'react'

function Users() {
  const [users,setUsers] = useState([])
  const getUsers =()=>{
    const usersDetials = JSON.parse(localStorage.getItem("Users"));
    setUsers(usersDetials)
  }
  console.log(users);

  useEffect(()=>{
      getUsers()
  },[])

  return (
    <div className='flex justify-center items-center flex-col'>
      {users.length>0?
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-3'>
      {users.map((user)=>(
        <div className={user.email !=="admin@gmail.com"?'border-2 border-gray-500 p-5 rounded-3xl shadow-2xl w-11/12':'border-8 border-red-700 p-5 rounded-3xl shadow-2xl w-11/12'}>
        <div className='flex items-center w-full'>
          <img className='rounded-full w-20 h-20 ' src="https://www.clipartkey.com/mpngs/m/208-2089363_user-profile-image-png.png " alt="" />
        </div>
        {user.email !=="admin@gmail.com"?
          <h3>Username : <span className='font-semibold'>{user.username}</span></h3>:
          <h3>Username : <span className='font-bold text-red-700'>{user.username}</span></h3>
        }
        {user.email !=="admin@gmail.com"?
          <h5>Email address : <span className='font-semibold'>{user.email}</span></h5>:
          <h5>Email address : <span className='font-bold text-red-700'>{user.email}</span></h5>
        }
      </div>
      ))
      }
      </div>
      :
        <p>No user registered yet...!</p>
        }
    </div>
    )
}

export default Users