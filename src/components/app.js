import React from 'react';
import {Login} from './login';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

const App = ()=> {
  const [user, setUser] = useState({});

  return (
    <div>
      {/* <nav className='navBar'>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
        <Link to='/activities'>Register</Link>
        <Link to='/routines'>Register</Link>
        <Link to='/users/:username/routines'>Register</Link>
      </nav> */}
      <h1>Front End</h1>
      {/* <Routes>
        <Route path='/register' />
        <Route path='/login' element={<Login user={user} setUser = {setUser}/>}/>
        <Route path='/activities'/>
        <Route path='/routines'/>
        <Route path='/users/:username/routines'/>
      </Routes> */}
    </div>
  );
};

export default App;