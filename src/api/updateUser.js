import axios from 'axios';

const updateUser = async (payload) => {
    return await axios.put("http://localhost:5000/users/" + payload.id, {
        body: payload.data
    })
    .then(response => response.data)
};

export { updateUser };
