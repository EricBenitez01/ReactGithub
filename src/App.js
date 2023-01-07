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
    infoLoaded()
  },[page])
  const nextPage = () => {
    setPage(page + 1)
}

const previousPage = () => {
  setPage(page - 1)
}
async function infoLoaded(){
    
    try {
      const res = await fetch(`${REACT_APP_URL}/${page}`);
      const respuesta = await res.json();
      setUsers(respuesta)
      console.log(respuesta);

    } catch (error) {
      console.log(error);
    }

  }
  
  return (
    <div> 
            <div onClick={nextPage}> Previous Page </div>
            <div onClick={previousPage}> Next Page </div> 
    
    <Router>
      <Routes> 
          <Route  path="/" element={<UserList users={users}/>}  />
          <Route  path="/detail/:id" element={<UserDetail/>}  />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
