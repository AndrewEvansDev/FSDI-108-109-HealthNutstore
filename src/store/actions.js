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