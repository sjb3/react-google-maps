'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map } from './Components/Map/Map';
import { Places } from './Components/Places/Places';


class App extends Component {
    render() {
        return (
            <div>
                <h1>React + Google Map</h1>
                <Map />
                <Places />
            </div>
       )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

