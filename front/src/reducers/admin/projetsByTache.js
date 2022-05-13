export default (tachesOfProjet = [], action) => {
    switch (action.type){
        case 'FETCH_TACHES_OF_PROJET':
            return action.payload;
            default : 
        return tachesOfProjet;
    }
}