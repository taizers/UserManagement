import axios from 'axios';

const createUser = async (payload) => {
    return await axios.post("http://localhost:5000/users/", {
        body: payload
    })
    .then(response => response.data)
};

export { createUser };