export default (monthsheet = {}, action) => {
    switch (action.type){
        case 'FETCH_MONTHSHEET':
            return action.payload ; //actual monthsheet
        default : 
        return monthsheet;
    }
}