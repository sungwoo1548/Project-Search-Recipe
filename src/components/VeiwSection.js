import React from 'react';
import "./VeiwSection.css";

const VeiwSection = ({ data, items }) => {

    const itemsName = [];
    items.map(el => itemsName.push(el[0]));

    return (
        <div className="contents">
            {
                data.map((food) => {
                    return (
                        <section className="card">
                            <img src={food.image_url} alt="" />
                            <header>{food.name}</header>
                            <p>재료 :
                            {food.ingredients.map((ingredient, index) => {
                                const itemsIndex = itemsName.indexOf(ingredient);
                                if (itemsIndex !== -1) {
                                    if (items[itemsIndex][1]) {
                                        return <span className="selected">{ingredient} / </span>
                                    } else {
                                        return <span>{ingredient} / </span>
                                    }
                                } else {
                                    return <span>{ingredient} / </span>
                                }
                            })}
                            </p>
                            <a href={food.recipe_link} target="__blank">요리 영상 보러가기</a>
                        </section>
                    )
                })
            }
        </div>
    )
}

export default VeiwSection
