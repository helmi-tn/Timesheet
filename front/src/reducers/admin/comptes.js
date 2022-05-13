export default (comptes = [], action) => {
    switch (action.type){
        case 'FETCH_ALL_COMPTES':
            return action.payload;
        case 'DELETE_PROJET':
            return comptes.filter((compte) => compte._id !== action.payload);
        case 'UPDATE_COLLABS_EQUIPE':
            return action.payload;
        case 'UPDATE_COLLAB':
            return comptes.map((compte) => compte._id == action.payload._id ? action.payload : compte );
        default : 
        return comptes;
    }
}
