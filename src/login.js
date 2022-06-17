import React, { useState, useEffect } from 'react';
import { logIn, useAuth } from './firebaseConfig';

function Login() {
    const currentUser = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        if (currentUser && submit) {
            alert('User is Logged In');
        }
    }, [currentUser]);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        try {
            await logIn(email, password);
        } catch (err) {
            alert(err.message);
        }
        setSubmit(true);
    };

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 mx-auto mt-5 '>
                        <h1 className='text-center'>Log In </h1>

                        <div className='bg_card p-5 mt-5'>
                            <div className='mb-3'>
                                <label className='form-label'>Email</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='formGroupExampleInput2'
                                    onChange={handleEmail}
                                />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Password</label>
                                <input
                                    type='password'
                                    className='form-control'
                                    id='formGroupExampleInput2'
                                    onChange={handlePassword}
                                />
                            </div>
                            <div className='mb-3'>
                                <button
                                    type='button'
                                    className='btn btn-light mt-3'
                                    onClick={handleLogin}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
