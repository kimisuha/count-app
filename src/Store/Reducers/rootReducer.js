const initState = {
    number: 0
};

export const store = (state = initState, action) => {
    switch (action.type) {
        case 'ADD':
            let add = {...state}
            add.number++;
            state = add;
            return state;
        
        case 'DIVIDE':
            let divide = {...state};
            divide.number--;
            state = divide     
            return state;
        default:
            return state;
    }
}

export default store;