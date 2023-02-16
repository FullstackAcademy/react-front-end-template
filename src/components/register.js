import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchRegister } from '../api/fetch';
export const Register = (props) => {
    const {setUser, setToken} = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const register = async(ev) => {
        ev.preventDefault();
        const register = await fetchRegister(username, password)
        const token = window.localStorage.getItem("token");
        console.log(register)
        if(register.token){
            setToken(register.token);
            window.localStorage.setItem('token', token);
        }
        if(register.user){
            setUser(register.user);
        }
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
