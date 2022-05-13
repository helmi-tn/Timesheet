export default (equipe = {}, action) => {
    switch (action.type){
        case 'FETCH_EQUIPE':
            return action.payload;
            default :
        return equipe;
    }
}