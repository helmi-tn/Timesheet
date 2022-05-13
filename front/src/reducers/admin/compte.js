export default (compte = {}, action) => {
    switch (action.type){
        case 'FETCH_COMPTE':
            return action.payload;
            default :
        return compte;
    }
}