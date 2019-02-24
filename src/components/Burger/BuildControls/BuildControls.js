import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {lable: 'Salad', type: 'salad'},
    {lable: 'Bacon', type: 'bacon'},
    {lable: 'Cheese', type: 'cheese'},
    {lable: 'Meat', type: 'meat'}
];

const BuildControls = (props) => (

    <div className={classes.BuildControls}>
        <p>Price : <strong>{props.price}/-</strong> Rupees </p>
        {controls.map(control => (
            <BuildControl key={control.lable} ingredientLable={control.lable}
            addIngredient={() => props.addIngredient(control.type)}
            removeIngredient={() => props.removeIngredient(control.type)}
            disabled={props.disabled[control.type]} />
            )
        )}
        <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.order}>
            Place Order
        </button>
    </div>
)

export default BuildControls;