import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUser } from '../../../../redux/actions/logoutUser';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    profileCover: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#bbd8ff',
    },
    profileDetails: {
        // display: 'flex',
        height: 300,
        padding: 12,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#82b8ff',
    },
    avatar: {
        width: 150,
        height: 150,
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
const Profile = (props) => {
    // const { email = "sdfg@gfh.asd", fname = "Dev", id = "user1", lname = "D" } = props.users.users[props.users.loggedInUserId];
    if (props.users.loggedInUserId) {
        var { email, fname, id, lname, password } = props.users.users[props.users.loggedInUserId];
    }
    const classes = useStyles();
    console.log('props', props);
    return (
        props.users.loggedInUserId ?
            <Container component="main" maxWidth="md">
                <h1>Profile!</h1>
                <div className={classes.container}>
                    <div className={classes.profileCover}>
                        <Avatar className={classes.avatar}></Avatar>
                        <div style={{ display: 'flex', flexGrow: 1 }}>
                            <h1>{fname} {lname}</h1>
                        </div>
                    </div>
                    <div className={classes.profileDetails}>
                        <h2>Welcome, you successfully singed in !</h2>
                        <p style={{ fontSize: 20 }}>First Name: {fname}</p>
                        <p style={{ fontSize: 20 }}>Last Name: {lname}</p>
                        <p style={{ fontSize: 20 }}>Email Id: {email}</p>
                        <Button
                            type="submit"
                            // fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={(e) => { props.logoutUser(id) }}
                        >
                            Logout
                        </Button>
                    </div>
                </div>

            </Container>
            : <Redirect to="/signin" />
    )
}

const mapStateToProps = (state) => ({
    users: { ...state.users }
})
const mapDispatchToProps = (dispatch) => ({
    logoutUser: (id) => { dispatch(logoutUser(id)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);