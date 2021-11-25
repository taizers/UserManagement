import axios from 'axios';

const getUserData = (payload) => {
    return axios.get("http://localhost:5000/users/"+ payload)
    .then(response => response.data)
};

export { getUserData };
