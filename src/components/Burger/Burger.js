import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const Burger = (props) => {

    //  Array(n) => returns an empty arrya of n indices
    let transformedIngredients = Object.keys(props.ingredients).map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])].map((_, count) => {
                return <BurgerIngredient key={ingredientKey + count} type={ingredientKey} />
            });
        }).reduce((arrayOfElements, currentElement) => {
            return arrayOfElements.concat(currentElement);
        }, []);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className={classes.Burger} >
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />     
        </div>
    );
}

export default Burger;