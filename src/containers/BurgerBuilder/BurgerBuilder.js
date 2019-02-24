import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad : 10,
    bacon : 5,
    cheese : 15,
    meat : 30
};

class BurgerBuilder extends Component{

    state = {
        ingredients:{
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0
        },
        totalPrice : 10,
        isPurchasable : false,
        purchasing : false
    };
    updatePurchasable (ingredients) {
        const sum = Object.keys(ingredients).map((ingredientName) => {
            return ingredients[ingredientName];
        }).reduce((sum, el) => sum + el);
        this.setState({isPurchasable : sum > 0});
    }
    
    addIngredientHandler = (type) => {
        const count = this.state.ingredients[type] + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = count;
        
        const price = this.state.totalPrice + INGREDIENT_PRICES[type];
        
        this.setState({ingredients : updatedIngredients, totalPrice : price});
        this.updatePurchasable(updatedIngredients);
    }
    
    removeIngredientHandler = (type) => {
        if(this.state.ingredients[type] > 0){
            const count = this.state.ingredients[type] - 1;
            const updatedIngredients = {...this.state.ingredients};
            updatedIngredients[type] = count;
            
            const price = this.state.totalPrice - INGREDIENT_PRICES[type];
            
            this.setState({ingredients : updatedIngredients, totalPrice : price});
            this.updatePurchasable(updatedIngredients);
        }
    }
    
    orderHandler = () => {
        this.setState({purchasing : true});
    }

    cancelOrderHandler = () => this.setState({purchasing : false});

    continueOrderHandler = () => alert('Great! Enjoy');
        
    render(){
        const disableInfo = { ...this.state.ingredients };
        for (let key in disableInfo) disableInfo[key] = disableInfo[key] <= 0;

        return (
            <Aux>
                <Modal show={this.state.purchasing} backdropClose={this.cancelOrderHandler}>
                    <OrderSummary ingredients={this.state.ingredients} price={this.state.totalPrice}
                    orderCancel={this.cancelOrderHandler} orderContinue={this.continueOrderHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls addIngredient={this.addIngredientHandler} removeIngredient={this.removeIngredientHandler}
                disabled={disableInfo} price={this.state.totalPrice} purchasable={this.state.isPurchasable} order={this.orderHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;