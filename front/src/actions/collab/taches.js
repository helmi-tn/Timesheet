import * as api from '../../api';

export const getTachesByCollab = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchTachesByCollab(id);
        dispatch({ type : 'FETCH_TACHES_BYCOLAB', payload: data});
    } catch (error) {
        console.log(error);
    }

}
export const updateTotalTache = (id,input) => async (dispatch) => {
    try {
        const { data } = await api.updateTotalTache(id,input);

        dispatch ({ type : 'UPDATE_TOTAL_TACHE', payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const getAllTaches = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAllTaches();
        dispatch({ type : 'FETCH_ALL_TACHES', payload: data});
    } catch (error) {
        console.log(error);
    }

}