import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Login } from "./components/login"
import { Register } from './components/register';

const App = () => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(null);
  return (
    <div>
      <nav className='navBar'>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </nav>
      <Routes>
        <Route path='/login' element={<Login user={user} setUser={setUser} token={token} />} />
        <Route path='/register' element={<Register register={user} />} />
      </Routes>
    </div>
  );
};
export default App;