import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { logOut, useAuth } from './firebaseConfig';

function Nav() {
    const currentUser = useAuth();
    const navigate = useNavigate();
    const handleLogOut = () => {
        if (currentUser) {
            logOut();
        } else {
            navigate('/login');
        }
    };
    return (
        <nav className='navbar navbar-expand-lg bg-light'>
            <div className='container-fluid '>
                <a className='navbar-brand' href='#'>
                    Aweteck Services
                </a>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarText'
                    aria-controls='navbarText'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarText'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0 '>
                        <li className='nav-item  '>
                            <Link to='/'>News</Link>
                        </li>
                        <li className='nav-item ml-5'>
                            <Link to='/signup'>Sign Up</Link>
                        </li>
                    </ul>
                    <span className='navbar-text'>
                        <button
                            type='button'
                            className='btn btn-secondary '
                            onClick={handleLogOut}
                        >
                            {currentUser ? (
                                'Log Out'
                            ) : (
                                <Link to='/login'>Login</Link>
                            )}
                        </button>
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
