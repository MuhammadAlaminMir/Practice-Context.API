import React from 'react';
import { UserConsumer } from './UserContext';
const BasicNev = () => {
    return (
        <UserConsumer>
            {({ isAuthenticated }) =>
                isAuthenticated ? <LoggedInNev /> : <LoggedOutNev />
            }
        </UserConsumer>
    );
};

export default BasicNev;

const LoggedInNev = () => {
    return (
        <UserConsumer>
            {({ user, logout }) => (
                <div>
                    <p>
                        Hello {user.name}, Your loggedIn with {user.email}
                    </p>
                    <ul>
                        <li>Dashboard</li>
                        <li onClick={logout}>Logout</li>
                    </ul>
                </div>
            )}
        </UserConsumer>
    );
};
const LoggedOutNev = () => {
    return (
        <UserConsumer>
            {({ login }) => (
                <div>
                    <p>Please Click The Login Button Below</p>
                    <ul>
                        <li onClick={login}>LogIn</li>
                        <li>Register</li>
                    </ul>
                </div>
            )}
        </UserConsumer>
    );
};
