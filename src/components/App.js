import React, { Component } from 'react';

import Loader from './Loader';
import SearchSection from './SearchSection';
import VeiwSection from './VeiwSection';

import "./App.css";

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="container search">
                    <SearchSection />
                </div>
                <div className="container view">
                    <VeiwSection />
                </div>
                {/* <div className="container load">
                    <Loader />
                </div> */}
            </div>
        )
    }
}
