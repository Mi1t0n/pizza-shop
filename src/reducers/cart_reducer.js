export const actions = {
    INCREASE_COUNT: 'INCREASE_COUNT',
    DECREASE_COUNT: 'DECREASE_COUNT',
    ADD_TO_CART: 'ADD_TO_CART',
    DELETE_ITEM: 'DELETE_ITEM',
    CLEAR_CART: ' CLEAR_CART',
    SET_CART: ' SET_CART'
};

export const reducer = (state, action) => {
    const indexOfItem = state.findIndex(({name, size, dough}) =>
        name === action.name
        && size === action.size
        && dough === action.dough
    );

    switch (action.type) {
        case actions.INCREASE_COUNT: {
            const newState = [...state];
            newState[indexOfItem] = {
                ...newState[indexOfItem],
                count: newState[indexOfItem].count + 1
            };
            localStorage.setItem('cart', JSON.stringify(newState));
            return newState;
        }

        case actions.DECREASE_COUNT: {
            const withOut = state.filter(obj => obj !== state[indexOfItem]);
            const newState = [...state];
            if (state[indexOfItem].count - 1 < 1) {
                return [...withOut];
            }
            newState[indexOfItem] = {
                ...newState[indexOfItem],
                count: newState[indexOfItem].count - 1
            };
            localStorage.setItem('cart', JSON.stringify(newState));
            return newState;
        }

        case actions.ADD_TO_CART:
            const newItem = [...state, {
                name: action.name,
                picture: action.picture,
                count: 1,
                price: action.price,
                size: action.size,
                dough: action.dough
            }];
            localStorage.setItem('cart', JSON.stringify(newItem));
            return newItem;

        case actions.DELETE_ITEM: {
            const withOut = state.filter(obj => obj !== state[indexOfItem]);
            localStorage.setItem('cart', JSON.stringify([...withOut]));
            return [...withOut];
        }

        case actions.CLEAR_CART:
            localStorage.setItem('cart', JSON.stringify([]));
            return [];

        case actions.SET_CART:
            return action.cart;

        default:
            return state;
    }
};
