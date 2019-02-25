import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';


const OrderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients).map(ingredientName => (
        <li key={ingredientName}>
            <span style={{textTransform: 'capitalize'}}>{ingredientName}</span> : {props.ingredients[ingredientName]}
        </li>
    ));
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Your delicious burger with following ingredients is ready</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price : {props.price}/- </strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clickEvent={props.orderCancel}>CANCEL</Button>
            <Button btnType="Success" clickEvent={props.orderContinue}>CONTINUE</Button>
        </Aux>
    )
}

export default OrderSummary;