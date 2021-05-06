//reducer: arrow fuction tha receives state and action and retuns new state

const groceryListReducer = (state = [], action) => {

    switch (action.type) {
        case "ADD_GROCERY_ITEM":
            var copy = [...state];
            copy.push(action.payload);
            return copy;

        case "REMOVE_GROCERY_ITEM":
            var copy = [...state];
            copy = copy.filter(t => t !== action.payload);
            return copy;

        default:
            return state;
    }
};

export default groceryListReducer;