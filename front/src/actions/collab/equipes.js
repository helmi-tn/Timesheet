import * as api from '../../api';

export const getAllEquipes = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAllEquipes();
        dispatch({ type : 'FETCH_ALL_EQUIPES', payload: data});
    } catch (error) {
        console.log(error);
    }

}

export const getEquipe = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchEquipe(id);
        dispatch({ type : 'FETCH_EQUIPE', payload: data});
    } catch (error) {
        console.log(error);
    }

}
export const deleteEquipe = (id) => async (dispatch) => {
    try {
        await await api.deleteEquipe(id);
        dispatch({ type : 'DELETE_EQUIPE', payload: id});
    } catch (error) {
        console.log(error);
    }

}

export const updateEquipe = (id, equipe) => async (dispatch) => {
    try {
      const { data } = await api.updateEquipe(id,equipe)
  
      dispatch({ type: 'UPDATE_EQUIPE', payload: data });
    } catch (error) {
      console.log(error);
    }
  };
