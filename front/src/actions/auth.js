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
                localStorage.setItem('profile', token );
                console.log(response)
                navigate('/collaborateur/acceuil')
            })
            .catch(error => {
                console.log(error);
            })

    }
    
}