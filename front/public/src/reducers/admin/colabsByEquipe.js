export default (colabsByEquipe = [], action) => {
    switch (action.type){
        case 'FETCH_COLLABS_OF_EQUIPE':
            return action.payload;
            default : 
        return colabsByEquipe;
    }
}