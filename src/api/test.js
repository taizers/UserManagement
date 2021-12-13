import axios from 'axios';

const sign = async () => {
    return await axios.post("http://127.0.0.1:8000/api/login", {
			email: "ilonafox168@gmail.com",
			password: "loveyoufox01",
    })
    .then(res => console.log("ilona: " , res))
    .catch(err => console.log("ilona : ", err))
};

export { sign };
