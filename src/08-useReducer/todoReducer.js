
export const todoReducer = (initialState = [], action = {}) => { 
    switch (action.type) {
        case '[TODO] Add':
            return [...initialState, action.payload]
        case '[TODO] Remove':
            return initialState.filter(todo => todo.id !== action.payload);
        default:
            return initialState;
    }
 }