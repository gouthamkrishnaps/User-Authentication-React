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
    <div>
      {users.length>0?
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-3'>
      {users.map((user)=>(
        <div className='border-2 border-gray-500 p-5 rounded-3xl shadow-2xl w-11/12'>
        <div className='flex items-center w-full'>
          <img className='rounded-full w-20 h-20 ' src="https://www.clipartkey.com/mpngs/m/208-2089363_user-profile-image-png.png " alt="" />
        </div>
        <h3>Username : <span className='font-semibold'>{user.username}</span></h3>
        <h5>Email address : <span className='font-semibold'>{user.email}</span></h5>
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