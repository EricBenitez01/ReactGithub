import React from 'react';
import {useState, useEffect} from 'react'
import UserList from './components/UserList';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDetail from './components/UserDetail'


function App() {  
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(3);
  const REACT_APP_URL = `https://apigithubs.onrender.com/users/page`;
  

useEffect( () => {
    async function infoLoaded(){
    
    try {
      const res = await fetch(`${REACT_APP_URL}/${page}`);
      const respuesta = await res.json();
      setUsers(respuesta)
      

    } catch (error) {
      console.log(error);
    }

  }
  infoLoaded()
},[page, REACT_APP_URL])

const nextPage =() =>{
    setPage(page + 1);
  }

const previousPage = () => {
  setPage(page - 1)
}

  
  return (

    <Router>
      <Routes> 
          <Route  path="/" element={<UserList users={users}previousPage={ previousPage }nextPage={nextPage }/>}  />
          <Route  path="/detail/:id" element={<UserDetail/>}  />
      </Routes>
    </Router>

  );
}

export default App;
