import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchLogin, fetchUser } from '../api/fetch';

export const Login = (props) => {
  const user = props.user;
  const setUser = props.setUser;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const message = 'Login'

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    console.log(token);
    if (!token) {
      return
    }
    try {
      fetchLogin(username, password);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const login = async(ev) => {
    ev.preventDefault();
    const login = await fetchLogin(username, password)
    const token = login.token;
    window.localStorage.setItem('token', token);
    const user = await fetchUser(token)
    console.log(user)
    setUser(user);
  }
  return (
    <div>
      <form className='login' onSubmit={login} >
        <h1>
          {message}
        </h1>
        <div className='userPass'>
          <input
            placeholder="username"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
          />
          <input
            placeholder="password"
            type={'password'}
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button disabled={!username || !password}>Login</button>
        </div>
        <Link to='/Register'>
          Don't Have An Account Yet? Click Here.
        </Link>
      </form>
    </div>
  );
};
