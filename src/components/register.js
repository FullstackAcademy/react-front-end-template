import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchRegister } from '../api/fetch';
export const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const register = (ev) => {
        ev.preventDefault();
        fetchRegister(username, password)
        console.log(fetchRegister(username, password))
            .then(response => response.json())
            .then(result => {
                console.log(result);
                console.log('Account Created!');
                // const redirectposts = () => {
                //     window.location.href = '/dist/#/posts';
                // }
                // //redirectposts();
            })
            .catch(err => console.log(err));
    };
    return (
        <div>
            <form className='register' onSubmit={register}>
                <h1>Register</h1>
                <div className='userPass'>
                    <input
                        placeholder='Username'
                        value={username}
                        onChange={ev => setUsername(ev.target.value)}
                    />
                    <input
                        placeholder='Password'
                        type='password'
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}
                    />
                    <button>Register</button>
                </div>
                <Link to='/Login'>
                    Already Have An Account? Click Here.
                </Link>
            </form>
        </div>
    );
};
