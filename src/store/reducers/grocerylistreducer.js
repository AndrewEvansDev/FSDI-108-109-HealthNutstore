//reducer: arrow fuction tha receives state and action and retuns new state

const groceryListReducer = (state = [], action) => {

    switch (action.type) {
        case "ADD_GROCERY_ITEM":
            var copy = [...state];
            let found = false;
            for (let i = 0; i < copy.length; i++) {
                let item = copy[i];
                if (item.id === action.payload.id) {
                    found = true;
                    item.quantity = item.quantity + action.payload.quantity;
                }
            }
            if (!found) {
                copy.push(action.payload);
            }
            return copy;

        case "REMOVE_GROCERY_ITEM":
            var recopy = [...state];
            recopy = recopy.filter(t => t.id !== action.payload.id);
            return recopy;

        case "CLEAR_GROCERY_LIST":
            return [];

        default:
            return state;
    }
};

export default groceryListReducer;