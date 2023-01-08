import React from 'react';


function CardUser({user}) {
  return (
    <div className='bg-violet-900 hover:bg-violet-500 text-white rounded-lg p-5'>
    <h1 className='text-xl font-bolt capitalize ' >User ID :  {user.id}</h1> 
    <p className='text-gray-500 text-sm'> User Name :  {user.login} </p>
    </div>
  )
}

export default CardUser