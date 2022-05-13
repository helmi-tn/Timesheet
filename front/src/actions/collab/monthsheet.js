import * as api from '../../api';

export const getMonthsheet = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchMonthsheet(id);
        dispatch({ type : 'FETCH_MONTHSHEET', payload: data});
    } catch (error) {
        console.log(error);
    }

}
