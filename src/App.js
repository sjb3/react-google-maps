'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
    render() {
        return (
            <div>
                <h1>React + Google Map</h1>
            </div>
       )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
); 

