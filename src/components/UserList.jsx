import React from 'react'
import CardUser from './CardUser'
import { Link } from 'react-router-dom';

function UserList({users}) {
    console.log(users);
    if (users.length ===  0){
        return  <h1 className='text-white text-4xl font-bolt text-center'>Cargando</h1> 
    } else {
        return (
        <div className='conteiner mx-auto p-10'>
          
            <div className='grid grid-cols-5 gap-2 p-4  ' >
                <p>Hola users</p>
                {users.map((user) => 
                <Link to={`/detail/${user.login}`}>
                    <CardUser key={user.id}  user={user} />
                </Link>
            )}
            </div>
        </div>
  )}
}

export default UserList;

