import axios from 'axios';

const deleteUser = async (payload) => {
    return await axios.delete("http://localhost:5000/users/" + payload,{ 
        body: payload
    })
    .then(response => response.data)
};

export { deleteUser };