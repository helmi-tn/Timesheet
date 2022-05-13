import * as api from '../../api';
export const getTotalsProjets = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTotalsOfProjets();
        dispatch({ type : 'FETCH_TOTALS_PROJETS', payload: data});
    } catch (error) {
        console.log(error);
    }

}