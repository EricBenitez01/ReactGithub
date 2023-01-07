import React from 'react'
import CardUser from './CardUser'
import { Link } from 'react-router-dom';

function UserList({users, nextPage, previousPage}) {
    console.log(users);
    if (users.length ===  0){
        return  <h1 className='text-white text-4xl font-bolt text-center'>loading</h1> 
    } else {
        return (
        <div className='conteiner mx-auto h-full bg-zinc-900 p-10'>          
            <h1 className='text-white text-4xl font-bolt text-center'>This are GitHub Users</h1>
            <div className='grid grid-cols-5 gap-2 p-4 '>
                
                {users.map((user) => 
                <Link key={user.id} to={`/detail/${user.login}`}>
                    <CardUser key={user.id}  user={user} />
                </Link>
                )}
            </div>
            <div className='flex justify-between p-20 '>
                <button className='bg-indigo-500 px-3 py-1 text-withe hover:bg-indigo-700 rounded-md' onClick={previousPage}>Previous Page</button>
                <button className='bg-indigo-500 px-3 py-1 text-withe hover:bg-indigo-700 rounded-md' onClick={nextPage}>  Next Page </button>
            </div>
             
        </div>
  )}
}

export default UserList;

