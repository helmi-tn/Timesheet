import * as api from '../api'
import axios from 'axios';
import { API } from '../api';

export const login = (formData,navigate) => {
    return dispatch => {
        dispatch({ type :'AUTH'});
        API.post("http://localhost:8080/login", formData,{
            headers: {
            'Content-Type': 'application/json'
            }
          })
            .then(response => {
                let token = response.headers.authorization;
                let emailJson = JSON.parse(response.config.data);
                let email = emailJson.email;
                console.log('EMAIL  = ', email);
                localStorage.setItem('profile', token );
                localStorage.setItem('email',email);
                getUser(email);
                if(email=="helmi@live.fr"){
                    navigate('/admin/acceuil')
                }else{
                    navigate('/collaborateur/acceuil')
                }
            })
            .catch(error => {
                console.log(error);
            })

    }
    
}

export const getUser = (email) => async (dispatch) => {
    try {
        const { data } = await api.fetchUser(email);
        console.log('DATA =' , data);
        dispatch({ type : 'FETCH_USER', payload: data});
    } catch (error) {
        console.log(error);
    }

}