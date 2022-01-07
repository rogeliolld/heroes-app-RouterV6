import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginScreen = () => {

    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
       
        const action = {
            type: types.login,
            payload:{
                name: 'Rogelio'
            }
        }
        dispatch(action);
        const lastPath = localStorage.getItem('lastPath') || '/';

        navigate(lastPath,{
            replace: true
        });


    }
    return (
        <div>
            <h1>Login</h1>
            <hr/>
            <button
                className='btn btn-primary'
                onClick={ handleLogin}
            >
                Login
            </button>
        </div>
    )
}
