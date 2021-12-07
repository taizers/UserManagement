import axios from 'axios';

const signUpUser = async (payload) => {
    return await axios.post("http://localhost:5000/login/", {
        body: payload
    })
    .then(response => response.data)
};

export { signUpUser };