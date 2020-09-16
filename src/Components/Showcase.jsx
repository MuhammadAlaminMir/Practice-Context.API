import React from 'react';
import { UserConsumer, UserContext } from './UserContext';

const Showcase = () => {
    // console.log(user);
    return (
        <UserConsumer>
            {({ user }) => (
                <div>
                    <h3>{user.name} Showcase:</h3>

                    <AddItem />
                    <ItemList />
                </div>
            )}
        </UserConsumer>
    );
};

export default Showcase;

class AddItem extends React.Component {
    state = {
        value: '',
    };
    handleChange = (e) => {
        this.setState({ value: e.target.value });
    };
    addItem = () => {
        if (this.state.value) {
            this.context.addToShowcase(this.state.value);
            this.setState({ value: '' });
        }
    };
    render() {
        // console.log(this.context);
        return (
            <div className="d-flex my-33">
                <input
                    type="text"
                    className="from-control my-2"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                &nbsp;&nbsp;
                <button
                    onClick={this.addItem}
                    className="btn btn-sm btn-primary btn-block"
                >
                    Add Item
                </button>
            </div>
        );
    }
}
AddItem.contextType = UserContext;

const ItemList = () => {
    return (
        <UserConsumer>
            {({ user }) => (
                <ul className="list-group">
                    {user.languages.map((lang) => (
                        <li className="list-group-item" key={lang}>
                            {lang}
                        </li>
                    ))}
                </ul>
            )}
        </UserConsumer>
    );
};
