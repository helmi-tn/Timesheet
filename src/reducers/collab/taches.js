export default (taches = [], action) => {
    switch (action.type){
        case 'FETCH_ALL_TACHES':
            return action.payload;
        case 'FETCH_TACHES_BYCOLAB':
            return action.payload;
        case 'UPDATE_TOTAL_TACHE':
        return taches.map((tache) => tache._id == action.payload._id ? action.payload : tache)
        default : 
        return taches;
    }
}