import React from 'react';
import { createRoot } from 'react-dom/client';

const App = ()=> {
  return (
    <div>
      <nav className='navBar'>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
        <Link to='/activities'>Register</Link>
        <Link to='/routines'>Register</Link>
        <Link to='/users/:username/routines'>Register</Link>
      </nav>
      <h1>Front End</h1>
      <Routes>
        <Route path='/register'/>
        <Route path='/login'/>
        <Route path='/activities'/>
        <Route path='/routines'/>
        <Route path='/users/:username/routines'/>
      </Routes>
    </div>
  );
};

const root = createRoot(document.querySelector('#root'));

root.render(<App />);
