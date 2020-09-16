import React, { createContext, Component } from 'react';

let Context = null;
const { Provider, Consumer } = (Context = createContext());

class UserPorvider extends Component {
    state = {
        user: {
            name: 'Alamin',
            email: 'alaminmir08@gmail.com',
            languages: ['C Programming', 'Java', 'Javascript', 'Python', 'Go'],
        },
        isAuthenticated: false,
    };
    logIn = () => {
        this.setState({ isAuthenticated: true });
    };
    logOut = () => {
        this.setState({ isAuthenticated: false });
    };
    addToShowcase = (item) => {
        const user = { ...this.state.user };
        user.languages.push(item);
        this.setState({ user });
    };
    render() {
        return (
            <Provider
                value={{
                    ...this.state,
                    login: this.logIn,
                    logout: this.logOut,
                    addToShowcase: this.addToShowcase,
                }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export { UserPorvider, Consumer as UserConsumer, Context as UserContext };
