import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    navCont: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    navitem: {
        padding: 12,
        color: 'white',
        textDecoration: 'none',
        margin: 8,
        backgroundColor: theme.palette.secondary.main,
    },
}))
const Navbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.navCont}>
            <Link className={classes.navitem} to="/">Home</Link>
            <Link className={classes.navitem} to="/signin">SignIn</Link>
            <Link className={classes.navitem} to="/signup">SignUp</Link>
            {/* <Link className={classes.navitem} to="/profile">Profile</Link> */}
            <Link className={classes.navitem} to="/counter">Counter</Link>
        </div>
    );
};
export default Navbar;