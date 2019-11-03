import React, { useState } from 'react';
import "./SearchSection.css";

const SearchSection = (props) => {
    const { items, handleItem } = props;

    const [userInput, setUserInput] = useState("");

    const _userInput = (text) => { // 사용자 입력값 
        setUserInput(text);
    }

    const onSubmit = (e) => {  // 엔터나 버튼 클릭시
        e.preventDefault();

        if (userInput) {  // 사용자 입력값이 있으면
            handleItem(userInput, "add"); // method에 "add"로 식자재(item) 추가
            setUserInput("");
        } else {
            alert("재료를 입력하세요.");
        }

    }

    const _selectControll = (text) => {
        handleItem(text, "clicked");
    }

    return (
        <>
            <h2>Search</h2>
            <div className="searchbar">
                <form action="" onSubmit={e => onSubmit(e)}>
                    <input type="text"
                        placeholder="식재료를 추가하세요."
                        onChange={(e) => { _userInput(e.target.value); }} value={userInput}
                    />
                    < button type="submit">+</button>
                </form>
            </div>

            <h2>추가된 식재료</h2>
            <button onClick={() => { props.clearLocalStorage ()}}>초기화</button>
            <div className="addedList">
                {
                    items.map((el) => {
                        return (
                            <p className={el[1] ? "active" : "inActive"}
                                onClick={e => _selectControll(e.target.innerHTML)}>
                                {el[0]}
                            </p>
                        )
                    })
                }
            </div>
        </>
    )
}

export default SearchSection
