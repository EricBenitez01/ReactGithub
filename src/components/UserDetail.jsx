import React, { useEffect, useState,  } from 'react';
import {useParams} from "react-router";
import "./UserDetail.css"

const UserDetail = () => {
  const [detail, setDetail] = useState([]);
  const [repos, setRepos] = useState([]);

  const {id} = useParams();
  const detailName = id
  
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
  useEffect( () => {
    repositoris()
  }, [])
  
async function repositoris(){
    
    try {
      const res = await fetch(`http://localhost:3000/users/detail/${detailName}/repos`);
      const respuesta = await res.json();
      console.log(respuesta);
      setRepos(respuesta)

    } catch (error) {
      console.log(error);
    }
    
  }
  console.log(repos)
  return( 
    <div className='conteiner mx-auto bg-zinc-900 p-10  grid h-screen place-items-center'key={detail.id}>
    <div className='cardDetail w-70'>
      <h2>profile detail</h2>
      <p>{detail.id}</p>
      <p>{detail.login}</p>
      <p>{detail.url}</p>
      <p>{detail.created_at}</p>
    </div>
    <div className='repoDetail'>
      <h2>github repositoris</h2>
      {repos.map((repo) => 
        <div >    
            <p>{repo.id}</p>
            <p>{repo.login}</p>
            <p>{repo.url}</p>
            <p>{repo.name}</p>     
        </div>      
      )}
    </div>  
    </div>
    
  );
  
};

export default UserDetail;