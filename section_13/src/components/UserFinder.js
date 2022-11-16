import React, { Fragment, useState, useEffect, Component } from 'react';
import UsersContext from '../store/users-context';

import Users from './Users';

import classes from "./UserFinder.module.css";

// const DUMMY_USERS = [
//     { id: 'u1', name: 'Max' },
//     { id: 'u2', name: 'Manuel' },
//     { id: 'u3', name: 'Julie' },
// ];

class UserFinder extends Component {
    static contextType = UsersContext;

    constructor() {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: '',
        }
    }

    componentDidMount() {
        // Send http request...
        this.setState({ filteredUsers: this.context.users })
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(this.context.users);
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: this.context.users.filter(user => {
                    return user.name.includes(this.state.searchTerm);
                }),
            });
        }
    }

    searchChangeHandler(evnt) {
        this.setState({ searchTerm: evnt.target.value });
    }

    render() {
        return (
            <>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <Users users={this.state.filteredUsers} />
            </>
        );
    }
}

// const UserFinder = () => {
//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         setFilteredUsers(
//             DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//         );
//     }, [searchTerm]);

//     const searchChangeHandler = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     return (
//         <Fragment>
//             <input type='search' onChange={searchChangeHandler} />
//             <Users users={filteredUsers} />
//         </Fragment>
//     );
// };

export default UserFinder;