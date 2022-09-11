import axios from "axios";

const axioxInstance = axios.create({
    baseURL:"https://gorest.co.in/public/v2/users",
    headers:{
        'Content-Type' : "application/json",
        "Authorization": "Bearer c4b8242eb24c239fcf23f11eb5e8c33fa27aacb2fc6bfa9e470a044cf9646fb0"
    },
})


export default axioxInstance;


