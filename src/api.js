import axios from 'axios';

export const createApi = () =>{
    const api = axios.create({
        baseUrl: '', //'url',
        timeout: 1000 * 5,
        withCredentials: true,
    });
    const onSuccess = (response) => response;
    const onFail = (err) =>{
        if (err.response.status === 403) {
            history.pushState(null,null,"/login");
        }
        return err;
    };
    api.interceptors.response.use(onSuccess,onFail);

    return api;
};

