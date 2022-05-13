export default (tachesByCollab = [], action) => {
    switch (action.type){
        case 'FETCH_TACHES_BYCOLAB':
            return action.payload;
            default : 
        return tachesByCollab;
    }
}


