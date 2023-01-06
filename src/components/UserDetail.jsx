import React, { useEffect, useState,  } from 'react';
import {useParams} from "react-router";
import CardUser from './CardUser'

const UserDetail = () => {
  const [detail, setDetail] = useState([]);

  const {id} = useParams();
  const detailName = id
  console.log(useParams());
  const REACT_APP_URL = `http://localhost:3000/users/detail/${detailName}`;
  

  useEffect( () => {
    infoUser()
  }, [])
  
async function infoUser(){
    
    try {
      const res = await fetch(`${REACT_APP_URL}`);
      const respuesta = await res.json();
      console.log(respuesta);
      setDetail(respuesta)

    } catch (error) {
      console.log(error);
    }
    console.log(detail)
  }
  return(
    <div className='Detail' key={detail.id}>
      <CardUser  user={detail} />
      <p>userrs</p>
      
    </div>
  );
  
};

export default UserDetail;