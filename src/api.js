import axios from 'axios';
import { pathLinks } from './consts';

export const createApi = () =>{
    const api = axios.create({
        baseUrl: "https://reqres.in/api/users?page=", //'url', добавлять в запросах номер страницы в url
        timeout: 1000 * 5,
        withCredentials: true,
    });
    const onSuccess = (response) => response;
    const onFail = (err) =>{
        if (err.response.status === 403) {
            console.log("error");
            //History().pushState(null,null,pathLinks.error);
        }
        return err;
    };
    api.interceptors.response.use(onSuccess,onFail);

    return api;
};

