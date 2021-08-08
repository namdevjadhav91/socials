import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignIn from '../login/SignIn';
import SignUp from '../login/SignUp';
import Profile from './dashboard/profile/Profile';
import Counter from './dashboard/counter/counter';

import { connect } from 'react-redux';


import { signUpUser } from '../../redux/actions/signUpUser';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "loggedInUserId": false
        }
    }
    componentDidUpdate(prevProps, prevState) {
        // if (prevState.users != this.state.users) {
        //     return true
        // }
    }
    componentDidMount() {
        console.log('state1', this.state, this.props);
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then((res) => {
        //         return res.json();
        //     })
        //     .then((res) => {
        //         // console.log(res);
        //         this.setState(() => ({
        //             users: res
        //         }), () => {
        //             // console.log('state2', this.state);
        //         })
        //     })
        //     .catch((err) => {
        //         console.error(err);
        //     })

    }
    render() {
        return (
            <Switch>
                <Route path="/" component={SignUp} exact />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/profile" component={Profile} />
                <Route path="/counter" component={Counter} />
            </Switch>
        )
    }
}

const mapStateToProps = (state) => ({
    state: { ...state }
})
const mapDispatchToProps = (dispatch) => ({
    signUpUser: (user) => { dispatch(signUpUser(user)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(MainPage));