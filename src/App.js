import React from 'react';
import {useState, useEffect} from 'react'
import UserList from './components/UserList';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDetail from './components/UserDetail'

function App() {  
  const [users, setUsers] = useState([]);
  const REACT_APP_URL = "http://localhost:3000/users/page/1";
  

  useEffect( () => {
    infoLoaded()
  }, [])
  
async function infoLoaded(){
    
    try {
      const res = await fetch(`${REACT_APP_URL}`);
      const respuesta = await res.json();
      setUsers(respuesta)

    } catch (error) {
      console.log(error);
    }

  }
  
  return (
  
    <Router>
      <Routes> 
        < >
          
          
          <Route  path="/" element={<UserList users={users}/>}  />
          <Route  path="/detail/:id" element={<UserDetail/>}  />

          
        </>
      </Routes>
    </Router>
  );
}

export default App;
