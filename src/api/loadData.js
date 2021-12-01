import axios from 'axios';
import { USERS_ON_PAGE } from '../consts';

const getUsersData = async (payload) => {
    return await axios.get(`http://localhost:5000/users/?page=${payload}&limit=${USERS_ON_PAGE}`)
    .then(response => response.data)
};

export { getUsersData };
