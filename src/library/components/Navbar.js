import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/signin">SignIn</Link>
            <Link to="/signup">SignUp</Link>
            {/* <Link to="/profile">Profile</Link> */}
            <Link to="/counter">Counter</Link>
        </div>
    );
};
export default Navbar;