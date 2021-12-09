import axios from 'axios';

const loadAllUserData = async (payload) => {
    return await axios.get(`http://localhost:5000/users/${payload}/all`)
    .then(response => response.data)
};

export { loadAllUserData };