import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Login = (props) => {
  const user = props.user;
  const setUser = props.setUser;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const message = 'Login'

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    console.log(token)
    if (!token) {
      return
    }
    try {
      fetch('http://fitnesstrac-kr.herokuapp.com/api/users/me', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
        .then(response => response.json())
        .then(result => {
          const newUser = result.data;
          setUser(newUser);
          console.log(newUser)
        })
    } catch (error) {
      console.error(error);
    }
  }, []);

  const login = (ev) => {
    ev.preventDefault();
    fetch('http://fitnesstrac-kr.herokuapp.com/api/users/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: { username: username, password: password }
      })
    })
      .then(response => response.json())
      .then(result => {
        console.log(result)
        const token = result.data.token;
        window.localStorage.setItem('token', token);
        fetch('http://fitnesstrac-kr.herokuapp.com/api/users/me', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        })
          .then(response => response.json())
          .then(result => {
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
