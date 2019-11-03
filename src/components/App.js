import React, { Component } from 'react';

import "./App.css";

import Loader from './Loader';
import SearchSection from './SearchSection';
import VeiwSection from './VeiwSection';

import data from "../datas/recipe.json";

export default class App extends Component {
    state = {
        items: [],
    }
    // a = [[],[]];

    handleItem = (text, method) => {
        if (method === "add") {
            console.log(text, "가 추가되었습니다.");
            this.state.items.push([text, true]);
            this.setState({ items: this.state.items });
        }
        if (method === "clicked") { // 추가된 식재료 클릭시 선택 해제됨 (noUseItems 에 추가되고 items에서 제외)
            console.log(text, "가 클릭됨");
            this.state.items.map(el => {
                if (el[0] === text) {
                    el[1] = !el[1];
                    this.setState({ items: this.state.items });
                }
            });

        }
    }

    render() {
        return (
            <div className="container">
                <div className="container search">
                    <SearchSection
                        items={this.state.items}
                        handleItem={this.handleItem}
                    />
                </div>

                <div className="container view">
                    <VeiwSection
                        data={data}
                        items={this.state.items}
                    />
                </div>
                {/* <div className="container load">
                    <Loader />
                </div> */}
            </div>
        )
    }
}
