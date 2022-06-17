import React, { useState, useEffect } from 'react';

import { signup, useAuth } from './firebaseConfig';

function SignUp() {
    const user = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        if (user && submit) {
            alert('Account created!');
        }
    }, [user]);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSignUp = async () => {
        try {
            await signup(email, password);
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
                        <h1 className='text-center'>Create Your Account </h1>

                        <div className='bg_card p-5 mt-5'>
                            {/* <div className='mb-3 '>
                                <label
                                    for='formGroupExampleInput'
                                    className='form-label text-start'
                                >
                                    Name
                                </label>
                                <input
                                    type='text'
                                    className='form-control  '
                                    id='formGroupExampleInput'
                                />
                            </div> */}
                            <div className='mb-3'>
                                <label
                                    // for='formGroupExampleInput2'
                                    className='form-label'
                                >
                                    Email
                                </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='formGroupExampleInput2'
                                    onChange={handleEmail}
                                />
                            </div>
                            <div className='mb-3'>
                                <label
                                    // for='formGroupExampleInput2'
                                    className='form-label'
                                >
                                    Password
                                </label>
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
                                    onClick={handleSignUp}
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

export default SignUp;
