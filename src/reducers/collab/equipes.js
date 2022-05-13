export default (equipes = [], action) => {
    switch (action.type){
        case 'FETCH_ALL_EQUIPES':
            return action.payload;
        case 'DELETE_EQUIPE':
            return equipes.filter((equipe) => equipe._id !== action.payload); 
        case 'UPDATE_EQUIPE':
            return equipes.map((equipe) => equipe._id == action.payload._id ? action.payload : equipe );
        default : 
        return equipes;
    }
}