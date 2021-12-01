import axios from 'axios';

const getUserData = async (payload) => {
    return await axios.get("http://localhost:5000/users/"+ payload)
    .then(response => response.data)
};

export { getUserData };
