import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Login } from "./components/login"
import { Register } from './components/register';
import { Profile } from './components/profile';

const App = () => {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);
  const [routines, setRoutines] = useState({});
  const [activities, setActivities] = useState({});
  return (
    <div>
      <nav className='navBar'>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        <Link to='/profile'>Profile</Link>
      </nav>
      {user.username ? <h3>{`welcome back: ${user.username}`}</h3>:null}
      <Routes>
        <Route path='/login' element={<Login user={user} setUser={setUser} token={token} />} />
        <Route path='/register' element={<Register setUser={setUser} setToken={setToken} />} />
        <Route path='/profile' element={<Profile routines={routines} activities={activities} user={user} />}/>
      </Routes>
    </div>
  );
};
export default App;