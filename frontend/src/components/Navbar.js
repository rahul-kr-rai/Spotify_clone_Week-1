import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { authData, logout } = useContext(AuthContext);

    return (
        <nav>
            <h1>MERN Auth App</h1>
            {authData ? (
                <button onClick={logout}>Logout</button>
            ) : (
                <>
                    <a href="/login">Login</a>
                    <a href="/signup">Signup</a>
                </>
            )}
        </nav>
    );
};

export default Navbar;