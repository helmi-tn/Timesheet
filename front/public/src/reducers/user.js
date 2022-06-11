export default (user = {}, action) => {
    switch (action.type){
        case 'FETCH_USER':
            localStorage.setItem('id user', action.payload.id );
            return action.payload;
            default : 
        return user;
    }
}