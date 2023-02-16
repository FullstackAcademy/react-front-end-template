import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Login } from "./components/login"
import { Register } from './components/register';
import { AllActivity } from './components/activity/ViewActivity';
import { fetchActivity } from './api/fetch';

const url = 'http://fitnesstrac-kr.herokuapp.com/api/activities'

const App = () => {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);
  const [activities, setActivities]= useState([]);
  
  useEffect(()=> {
    const fetchActivities = async ()=>{
      const response = await fetch(url);
      console.log("response",response);
      const data = await response.json();
      console.log("looking for data",data);
      setActivities(data);
    }
    
    fetchActivities();
   
  }, []);

  return (
    <div>
      <nav className='navBar'>
        <Link to='/login'>Login</Link>
        <Link to='/register'> Register</Link>
        <Link to='/viewActivity'> Activities</Link>
      </nav>
      {user.username ? <h3>{`welcome back: ${user.username}`}</h3>:null}
      <Routes>
        <Route path='/login' element={<Login user={user} setUser={setUser} token={token} />} />
        <Route path='/register' element={<Register setUser={setUser} setToken={setToken} />} />
        <Route path='/viewActivity' element={<AllActivity activities={activities} />} />
      </Routes>
    </div>
  );
};

export default App;