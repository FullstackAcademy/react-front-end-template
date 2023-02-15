import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchLogin,fetchUser } from '../api/fetch';

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
      fetchLogin(username,password);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const login = (ev) => {
    ev.preventDefault();
    fetchLogin(username,password)
      .then(response => response.json())
      .then(result => {
        console.log('This is the result from login')
        console.log(result)
        const token = result.data.token;
        window.localStorage.setItem('token', token);
        fetchUser()
          .then(response => response.json())
          .then(result => {
            console.log('this should be the user')
            console.log(user)
            const user = result.data;
            setUser(user);
            //  redirectposts();
          })
          .catch(console.error);
      })
      .catch(err => console.log(err));
  };

  //   const redirectposts = () => {
  //     window.location.href = '/dist/index.html#/posts';
  //   }

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
