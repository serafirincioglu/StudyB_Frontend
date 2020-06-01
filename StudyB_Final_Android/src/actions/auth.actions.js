import {fetchApi} from '../backend/api';
import SignUpPage from '../components/SignUpPage';
 


// export const createNewUser = async (userName,email,password) => {
    
//     const body1 = {
//         userName: this.userName,
//         firstName: "dummy",
//         lastName: "dummy",
//         password: this.password,
//         email: this.email
//     };
    
    
//     console.log(body1);
    
//     return async(dispatch) => {

//         try{
//             dispatch({
//                 type: "CREATE_USER_LOADING"
//             });

//             const response = await fetchApi("/users", "POST",body1,200);
            
//             if(response.success){
//                 dispatch({
//                     type: "CREAT_USER_SUCCESS",
//                     id: response.id
//                 });

//                 return response;

//             }else{
//                 throw response;
//             }
            
//         }catch(error){
//             dispatch({
//                 type: "CREAT_USER_FAIL",
//                 body: error.responseBody
//             });
//             return error;
//         }
//     }
// }

// export const loginUser = (body) => {
//     return async (dispatch) => {
//         try{
//             dispatch({
//                 type: "LOGIN_USER_LOADING"
//             });
//             const response = await fetchApi("/users","GET",body,200);

//             if(response.success){
//                 dispatch({
//                     type: "LOGIN_USER_SUCCESS",
//                 });
//                 dispatch({
//                     type: "AUTH_USER_SUCCESS",
//                     id: response.id
//                 });
//                 dispatch({
//                     type: "GET_USER_SUCCESS",
//                     body: response.responseBody
//                 });
//                 return response;
//             }else{
//                 throw response;
//             }

//         }catch(error) {
//             dispatch({
//                 type: "LOGIN_USER_FAIL",
//                 body: response.responseBody
//             });
//             return error;
//         }
//     }
// }


