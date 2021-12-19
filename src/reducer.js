export const initialState = {
    permitedToOpenModal:null,
    publicUsers:null,
    profileRendering:null,
}
export const actionTypes = {
    SET__PERMIT__AND__INFO:"SET__PERMIT__AND__INFO",
    SET__PUBLIC:"SET__PUBLIC",
    SET__PROFILE__MODAL:"SET__PROFILE__MODAL"
}
 const reducer=(state, action) => {
    
    switch(action.type){
        case actionTypes.SET__PERMIT__AND__INFO:
            return {
                ...state,
                permitedToOpenModal:action.permitInfo,
            }
        case actionTypes.SET__PUBLIC:
            return {
                ...state,
                publicUsers:action.publicUsers,
            }
        case actionTypes.SET__PROFILE__MODAL:
            return {
                ...state,
                profileRendering:action.profilerendermodal,
            }
            default:
                return state;
    }

};
export default reducer;