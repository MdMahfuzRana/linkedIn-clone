import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({

    name:'user',
    initialState: {
        user:null
    },
    reducers:{
        login : (state,action) => {
            state.user = action.payload.user;
        },
        logout: (state,action) => {
            state.user = null;
        }
    }

});

export const {login,logout} = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;



// export const initialState = {
//     authUser: null,
//     publicUsers:null,

// }
// export const actionTypes = {
//     SET__USER:"SET__USER",
//     SET__PUBLIC:"SET__PUBLIC",

// }
//  const reducer=(state, action) => {
    
//     switch(action.type){
//         case actionTypes.SET__USER:
//             return {
//                 ...state,
//                 authUser:action.authUser,
//             }
//         case actionTypes.SET__PUBLIC:
//             return {
//                 ...state,
//                 publicUsers:action.publicUsers,
//             }
//             default:
//                 return state;
//     }

// };
// export default reducer;

















