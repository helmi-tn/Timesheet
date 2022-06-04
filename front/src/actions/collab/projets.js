import * as api from '../../api';

export const getProjet = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchProjet(id);
        dispatch({ type : 'FETCH_PROJET', payload: data});
    } catch (error) {
        console.log(error);
    }
    
}
export const addProjet = (projet) => async (dispatch) => {
    try {
      const { data } = await api.addProjet(projet);
  
      dispatch({ type: 'ADD_PROJET', payload: data });
    } catch (error) {
      console.log(error)
    }
  };

export const getTachesOfProjet =(id) => async (dispatch ) => {
    try{
        const {data } = await api.fetchTachesOfProjet(id);
        dispatch({type : 'FETCH_TACHES_OF_PROJET', payload: data});
    }catch (error){
        console.log(error);
    }
}

export const deleteProjet = (id) => async (dispatch) => {
    try {
        await await api.deleteProjet(id);
        dispatch({ type : 'DELETE_PROJET', payload: id});
    } catch (error) {
        console.log(error);
    }
    
}
export const getAllProjets = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAllProjets();
        dispatch({ type : 'FETCH_ALL_PROJETS', payload: data});
    } catch (error) {
        console.log(error);
    }

}


export const getProjetsByCollab =(id) => async (dispatch ) => {
    try{
        const {data } = await api.fetchProjetsByCollab(id);
        dispatch({type : 'FETCH_PROJETS_OF_COLLAB', payload: data});
    }catch (error){
        console.log(error);
    }
}


