import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { getAllRoutines } from './api/fetchRoutine';
import { Login } from "./components/login"
import { Register } from './components/register';
import {ViewRoutine} from './components/routine/ViewRoutine'


const App = () => {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);
  const [routines, setRoutines] = useState([])

  useEffect(() => {
    const fetchAllRoutines = async () => {
      const fetchedRoutines = await getAllRoutines();
      setRoutines(fetchedRoutines);
    }
   fetchAllRoutines()
  }, [])

  return (
    <div>
      <nav className='navBar'>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </nav>
      {user.username ? <h3>{`welcome back: ${user.username}`}</h3>:null}

      <Routes>
        <Route path='/login' element={<Login user={user} setUser={setUser} token={token} />} />
        <Route path='/register' element={<Register setUser={setUser} setToken={setToken} />} />
        
      </Routes>
    </div>
  );
};
export default App;