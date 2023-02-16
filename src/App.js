import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Login } from "./components/login"
import { Register } from './components/register';
import { getAllRoutines } from './api/fetch';
import Routine from './components/Routine'


const App = () => {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);
  const [routines, setRoutines] = useState([])

  useEffect(() => {
    const fetchAllRoutines = async () => {
      const fetchedRoutines = await getAllRoutines()
      setRoutines(fetchedRoutines)
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
      <Routine routines={routines}/>

      <Routes>
        <Route path='/login' element={<Login user={user} setUser={setUser} token={token} />} />
        <Route path='/register' element={<Register setUser={setUser} setToken={setToken} />} />
        <Route path = '/src/components/Routine/AllRoutines.js' element = {<Routine routines={routines}/>}/>
      </Routes>
    </div>
  );
};
export default App;