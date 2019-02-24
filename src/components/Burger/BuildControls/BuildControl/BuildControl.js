import React from 'react';

import classes from './BuildControl.module.css';

const BuildControl = props => (
        <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.ingredientLable}</div>
        <button className={classes.Less} onClick={props.removeIngredient} disabled={props.disabled}>Less</button>
        <button className={classes.More} onClick={props.addIngredient}>More</button>
    </div>
)

export default BuildControl;