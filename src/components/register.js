import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const register = (ev) => {
        ev.preventDefault();
        fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user: { username: username, password: password }
            })
        })
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
