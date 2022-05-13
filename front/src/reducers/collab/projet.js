export default (projet = {}, action) => {
    switch (action.type){
        case 'FETCH_PROJET':
            return action.payload;
            default : 
        return projet;
    }
}