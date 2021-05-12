const cartReducer = (state = [], action) => {

    switch (action.type) {
        case "ADD_TO_CART":
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

        default:
            return state;
    }
}

export default cartReducer;