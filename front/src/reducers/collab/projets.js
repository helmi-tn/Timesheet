export default (projets = [], action) => {
    switch (action.type){
        case 'FETCH_ALL_PROJETS':
            return action.payload;
        case 'FETCH_TOTAL_PROJET':
            return projets.map((projet) => projet._id == action.payload._id ? action.payload : projet);
        case 'DELETE_PROJET':
            return projets.filter((projet) => projet._id !== action.payload); 
        case 'FETCH_PROJETS_OF_COLLAB':
            return action.payload;
        case 'ADD_PROJET':
            return [...projets, action.payload];
            default : 
        return projets;
    }
}