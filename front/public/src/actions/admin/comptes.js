import * as api from '../../api';

export const getAllComptes = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAllComptes();
        dispatch({ type : 'FETCH_ALL_COMPTES', payload: data});
    } catch (error) {
        console.log(error);
    }

}
export const getCompte = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchCompte(id);
        dispatch({ type : 'FETCH_COMPTE', payload: data});
    } catch (error) {
        console.log(error);
    }

}
export const deleteCompte = (id) => async (dispatch) => {
    try {
        await await api.deleteCompte(id);
        dispatch({ type : 'DELETE_COMPTE', payload: id});
    } catch (error) {
        console.log(error);
    }

}

export const getCollabsOfEquipe = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchCollabsOfEquipe(id);
        dispatch({ type : 'FETCH_COLLABS_OF_EQUIPE', payload: data});
    } catch (error) {
        console.log(error);
    }

}

export const updateCompte = (id, compte) => async(dispatch) => {
    try {
        const { data } = await api.updateCompte(id,compte);

        dispatch ({ type : 'UPDATE_COLLAB', payload: data})
    } catch (error) {
        console.log(error.message);
    }
}
export const updateCollabsEquipe = (id,collabs_id) => async(dispatch) => {
    try {
        const { data } = await api.updateCollaborateursEquipe(id,collabs_id);

        dispatch ({ type : 'UPDATE_COLLABS_EQUIPE', payload: data})
    } catch (error) {
        console.log(error.message);
    }
}
export const addCompte = (compte) => async (dispatch) => {
    try {
      const { data } = await api.addCompte(compte);
  
      dispatch({ type: 'ADD_COMPTE', payload: data });
    } catch (error) {
      console.log(error)
    }
  };