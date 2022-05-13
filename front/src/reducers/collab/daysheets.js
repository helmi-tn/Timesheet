export default (daysheets = [], action) => {
    switch (action.type){
        case 'UPDATE_DAYSHEET':
            return daysheets.map((daysheet) => daysheet._id == action.payload._id ? action.payload : daysheet)
        default : 
        return daysheets;
    }
}