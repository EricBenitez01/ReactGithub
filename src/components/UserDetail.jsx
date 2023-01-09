import React, { useEffect, useState,  } from 'react';
import {useParams} from "react-router";
import "./UserDetail.css"
import { ThreeDots } from  'react-loader-spinner'

const UserDetail = () => {
  const [detail, setDetail] = useState([]);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const {id} = useParams();
  const detailName = id
  
  const REACT_APP_URL = `https://apigithubs.onrender.com/users/detail/${detailName}`;
  

  useEffect( () => {
    async function infoUser(){
    
      try {
        const res = await fetch(`${REACT_APP_URL}`);
        const respuesta = await res.json();
        setDetail(respuesta)
  
      } catch (error) {
        console.log(error);
      }
      
    }
    infoUser()
    async function repositoris(){
      
      try {
        const res = await fetch(`https://apigithubs.onrender.com/users/detail/${detailName}/repos`);
        const respuesta = await res.json();
        setTimeout(() => {
          setLoading(false)
        }, 2500)
        setRepos(respuesta)
  
      } catch (error) {
        console.log(error);
      }
      
    }
    repositoris()
    
  }, [REACT_APP_URL, detailName])
  
  if (loading){
    return <div className='conteiner mx-auto bg-zinc-900 p-10 grid  h-full place-items-center'> 
    <ThreeDots 
    height="900px" 
    width="500px" 
    radius="9"
    color="#4fa94d" 
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
    />  
    </div> 
  }else{ 
  return( 
  <div className='conteiner mx-auto bg-zinc-900 p-10  grid h-full place-items-center'key={detail.id}>
    <h2 className='text-white text-4xl font-bolt text-center p-5'>Profile Detail</h2>
    <div className='cardDetail w-70 text-white rounded-lg  text-justify break-words mb-5'>     
                <p>ID: {detail.id}</p>
                <p>Name: {detail.login}</p>
                <p>GitHub: {detail.html_url}</p>
                <p>Date of the login creation: {detail.created_at}</p>
    </div>
    <div>   
    <h2 className='text-white text-2xl font-bolt text-center p-5' >REPOSITORY </h2>       
        <div className='grid grid-cols-5 gap-2 p-4'> 
              {repos.map((repo) => 
                 /* ID, name, and URL to the repository. */
                <div key={repo.id} className='bg-violet-900 hover:bg-violet-500 hover:text-gray-900 text-white rounded-lg p-5  text-justify break-words'>
                <h1 className='text-xl font-bolt capitalize ' >ID: {repo.id}</h1> 
                <p className=' text-sm'>Name: {repo.name} </p>  
                <p className=' text-sm'>URL: {repo.html_url} </p>
                  
                </div>  
                )}
        </div>   
      </div>  
      
  </div>  
  
    
  )};
};

export default UserDetail;