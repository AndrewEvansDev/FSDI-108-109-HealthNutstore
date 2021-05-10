export const addGroceryItem = (food) => {

    return {
        type: "ADD_GROCERY_ITEM",
        payload: food,
    };
};

export const removeGroceryItem = (food) => {

    return {
        type: "REMOVE_GROCERY_ITEM",
        payload: food,
    }
}

export const clearGroceryList = () => {

    return {
        type: "CLEAR_GROCERY_LIST",
    }

}

export const addToCart = (food) => {

    return {
        type: "ADD_TO_CART",
        payload: food,
    }

}