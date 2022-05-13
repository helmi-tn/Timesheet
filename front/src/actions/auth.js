import * as api from '../api'

export const login = (formData,navigate) => async(dispatch) => {
    try {
        const { data } = await api.login(formData);
        dispatch({ type : 'AUTH', data})
        navigate('/acceuil')
    } catch (error) {
        console.log(error);
    }
}