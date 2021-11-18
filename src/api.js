import axios from 'axios';

const TIMEOUT = 5000;
const BASE_URL = "https://reqres.in/api/users";

const createApi = () =>{
    const api = axios.create({
        baseUrl: BASE_URL, 
        timeout: TIMEOUT,
        withCredentials: true,
    });
    const onSuccess = (response) => response;
    const onFail = (err) =>{
        if (err.response.status === 403) {
            console.log("error");
            //history.pushState(null,null,pathLinks.error);
        }
        return err;
    };
    api.interceptors.response.use(onSuccess,onFail);

    return api;
};

export default createApi;
