import React from 'react'
import CardUser from './CardUser'
import { Link } from 'react-router-dom';
import { ThreeDots } from  'react-loader-spinner'

function UserList({users, nextPage, previousPage,loading}) {
    if (loading){
        return <div className='conteiner mx-auto bg-zinc-900 p-10 grid  h-full place-items-center'> <ThreeDots 
        height="900px" 
        width="500px" 
        radius="9"
        color="#4c51bf" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
         />  </div>
    } else {
        return (
        <div className='conteiner mx-auto h-full bg-zinc-900 p-10'>          
            <h1 className='text-white text-4xl font-bolt text-center'>This are GitHub Users</h1>
            <div className='grid grid-cols-5 gap-2 p-10 '>
                
                {users.map((user) => 
                <Link key={user.id} to={`/detail/${user.login}`}>
                    <CardUser key={user.id}  user={user} />
                </Link>
                )}
            </div>
            <div className='flex justify-between p-10 '>
                <button className='bg-indigo-500 px-3 py-1 text-withe hover:bg-indigo-700 rounded-md' onClick={previousPage}>Previous Page</button>
                <button className='bg-indigo-500 px-3 py-1 text-withe hover:bg-indigo-700 rounded-md' onClick={nextPage}>  Next Page </button>
            </div>
             
        </div>
  )}
}

export default UserList;

/* <h1 className='text-white text-4xl font-bolt text-center'>loading</h1> */ 