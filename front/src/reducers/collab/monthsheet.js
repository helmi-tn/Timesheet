export default (monthsheet = {}, action) => {
    switch (action.type){
        case 'FETCH_MONTHSHEET':
            return action.payload ; //actual monthsheet
        case 'CONFIRMER_MONTHSHEET':
            return monthsheet;
        case 'UPDATE_TOTAL_MONTHSHEET':
            return monthsheet;
        default : 
        return monthsheet;
    }
}