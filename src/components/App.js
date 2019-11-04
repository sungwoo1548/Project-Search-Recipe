import React, { Component } from 'react';

// firebase
import firebase from 'firebase';

// Style
import "./App.css";

// components
import Loader from './Loader';
import SearchSection from './SearchSection';
import VeiwSection from './VeiwSection';

export default class App extends Component {
    state = {
        items: [], // [[],[]]   ;  [["name"],[boolean]]
        data: null,
        recordedData: null,
    }

    componentDidMount() {
        // DB에서 불러오기 ==============================================================
        const firebaseConfig = {
            databaseURL: "https://test-8d211.firebaseio.com",
        };
        firebase.initializeApp(firebaseConfig);

        firebase.database().ref().on("value", (database) => {
            this.setState({ data: database.val() });
        });
        //==============================================================================

        // 저장된 localstrage있으면 불러오기 =============================================
        if (localStorage.getItem("myItems")) {
            const record = localStorage.getItem("myItems").split(",");
            record.map((el, index) => {
                if (index % 2 === 0) {
                    this.state.items.push([el, null]);
                } else {
                    this.state.items[index / 2 - 0.5][1] = el === "true" ? true : false;
                }
            });
            console.log(this.state.items);
            this.setState({ items: this.state.items });
        }
        //==============================================================================
    };

    handleItem = (text, method) => {
        if (method === "add") {
            if (this.state.items.indexOf(text) !== -1) {

                console.log(text, "가 추가되었습니다.");
                this.state.items.push([text, true]);
                this.setState({ items: this.state.items });
            } else {
                alert("이미 ", text, "가 추가되어있습니다.")
            }
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

        // locastorage에 기록
        localStorage.setItem("myItems", this.state.items);
    }

    clearLocalStorage = () => {
        localStorage.clear();
        this.setState({ items: [] });
    }

    render() {
        return (
            <div className="container">
                {this.state.data
                    ? <>
                        <div className="container search">
                            <SearchSection
                                items={this.state.items}
                                handleItem={this.handleItem}
                                clearLocalStorage={this.clearLocalStorage}
                            />
                        </div>
                        <div className="container view">
                            <VeiwSection
                                data={this.state.data}
                                items={this.state.items}
                            />
                        </div>
                    </>
                    : <div className="container load">
                        <Loader />
                    </div>
                }
            </div>
        )
    }
}
