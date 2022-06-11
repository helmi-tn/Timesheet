export default (taches = [], action) => {
    switch (action.type){
        case 'FETCH_ALL_TACHES':
            return action.payload;
        case 'UPDATE_TOTAL_TACHE':
        return taches;
        case 'FETCH_TACHES_OF_PROJET':
            return action.payload;
        case 'ADD_EQUIPE':
            return [...taches, action.payload];
        case 'ADD_TACHE_COLLABS':
            return taches;
        case 'ADD_TACHES_PROJET':
            return taches;
        default : 
        return taches;
    }
}