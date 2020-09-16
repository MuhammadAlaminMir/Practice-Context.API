import React, { Component } from 'react';
import BasicNev from './Components/BasicNev';
import Showcase from './Components/Showcase';

import { UserPorvider, UserConsumer } from './Components/UserContext.jsx';

class App extends Component {
    render() {
        return (
            <UserPorvider>
                <div className="container">
                    <div className="row">
                        <UserConsumer>
                            {({ isAuthenticated }) => (
                                <div className="col-sm-6 offset-sm-3">
                                    <h1 className="my-2">
                                        Learning Context Api
                                    </h1>
                                    <hr />
                                    <BasicNev />
                                    <hr />
                                    {isAuthenticated && <Showcase />}
                                </div>
                            )}
                        </UserConsumer>
                    </div>
                </div>
            </UserPorvider>
        );
    }
}

export default App;
