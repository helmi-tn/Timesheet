
const authReducder = ( state = { authData : null}, action) => {
    switch(action.type){
        case 'LOGOUT':
            localStorage.clear();
            return { ...state,authData: null};
        default:
            return state;
    }
}
export default authReducder;