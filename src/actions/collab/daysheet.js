import * as api from '../../api';

export const updateDaysheet = (id_day,input,order) => async (dispatch) => {
    try {
        const { data } = await api.updateDaysheet(id_day,input,order);

        dispatch ({ type : 'UPDATE_DAYSHEET', payload: data})
    } catch (error) {
        console.log(error.message);
    }
}