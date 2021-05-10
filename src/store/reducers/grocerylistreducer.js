//reducer: arrow fuction tha receives state and action and retuns new state

const groceryListReducer = (state = [], action) => {

    switch (action.type) {
        case "ADD_GROCERY_ITEM":
            var copy = [...state];
            copy.push(action.payload);
            return copy;

        case "REMOVE_GROCERY_ITEM":
            var recopy = [...state];
            recopy = recopy.filter(t => t !== action.payload);
            return recopy;

        case "CLEAR_GROCERY_LIST":
            return [];

        default:
            return state;
    }
};

export default groceryListReducer;