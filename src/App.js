'use strict';

import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Map } from './Components/Map/Map';
// import { Places } from './Components/Places/Places';


class App extends Component {
    render() {

        return (
            <div>
                <h1>React + Google Map</h1>
                <div style={{ width:300, height:600, background:'red' }}>
                    <Map
                        zoom={15}
                        center={{lat:47.6556801 ,lng:-122.3069357}}
                        containerElement={<div style={{height:'100%'}} />}
                        mapElement={<div style={{height:'100%'}} />}
                    />
                </div>
                {/*<Places />*/}
            </div>
       )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

/*<Map /> requires two ele, container and map El''*/