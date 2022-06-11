export default (tachestotal = [], action) => {
    switch (action.type){
        case 'FETCH_TACHES_TOTAL':
            return action.payload;
        default : 
        return tachestotal;
    }
}