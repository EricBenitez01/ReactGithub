import React from 'react';


function CardUser({user}) {
  return (
    <div className='bg-violet-900 hover:bg-violet-500 hover:text-gray-900 text-white rounded-lg p-6 m-1'>
    <h1 className='text-xl font-bolt capitalize ' >User ID :  {user.id}</h1> 
    <p className='text-sm '> User Name :  {user.login} </p>
    </div>
  )
}

export default CardUser