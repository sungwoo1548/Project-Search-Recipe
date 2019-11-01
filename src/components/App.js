import React, { Component } from 'react';

import Loader from './Loader'
import SearchSection from './SearchSection';
import VeiwSection from './VeiwSection';

export default class App extends Component {
    render() {
        return (
            <div className="Container">
                <SearchSection />
                <VeiwSection />
                <Loader />
            </div>
        )
    }
}
