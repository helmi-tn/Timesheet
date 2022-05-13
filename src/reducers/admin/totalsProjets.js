export default (totalsProjets = [], action) => {
    switch (action.type){
        case 'FETCH_TOTALS_PROJETS':
            return action.payload;
            default : 
        return totalsProjets;
    }
}