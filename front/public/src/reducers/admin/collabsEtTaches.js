export default (collabsEtTaches = [], action) => {
    switch (action.type){
        case 'FETCH_COLLABS_TACHES':
            return action.payload;
            default : 
        return collabsEtTaches;
    }
}