import {combineReducers } from 'redux';

const createUser = (state = {}, action) => {
    
    switch (action.type){
        
        case "CREATE_USER_LOADING":
            return{
                isLoading: true,
                id: null,
                isError: false,
                isSuccess: false,
                errors: null
            }
        case "CREAT_USER_SUCCESS":
            return{
                isLoading: false,
                id: action.id,
                isError: false,
                isSuccess: true,
                errors: null
            }
        case "CREAT_USER_FAIL":
            return{
                isLoading: false,
                id: null,
                isError: true,
                isSuccess: false,
                // Created Object will come here !!!!
                errors: action.values
            }

        default:
            return state;

    }
}

export default combineReducers({
    createUser
});