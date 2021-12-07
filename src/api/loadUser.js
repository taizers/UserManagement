import axios from 'axios';

const loadUser = async (payload) => {
    return await axios.put("http://localhost:5000/login/", {
        body: payload
    })
    .then(response => response.data)
};

export { loadUser };