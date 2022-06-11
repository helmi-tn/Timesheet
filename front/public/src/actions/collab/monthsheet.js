import * as api from '../../api';

export const getMonthsheet = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchMonthsheet(id);
        dispatch({ type : 'FETCH_MONTHSHEET', payload: data});
    } catch (error) {
        console.log(error);
    }

}

export const updateConfirmerMonthsheet = (id) => async (dispatch) => {
    try {
        const { data } = await api.confirmerMonthsheet(id);

        dispatch ({ type : 'CONFIRMER_MONTHSHEET', payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const updateTotalMonthsheet = (id) => async (dispatch) => {
    try {
        const { data } = await api.updateTotalMonthsheet(id);

        dispatch ({ type : 'UPDATE_TOTAL_MONTHSHEET', payload: data})
    } catch (error) {
        console.log(error);
    }
}


