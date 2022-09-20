import axios from "axios";

const axioxInstance = axios.create({
    baseURL:"https://gorest.co.in/public/v2/users",
    headers:{
        'Content-Type' : "application/json",
        "Authorization": "Bearer 0a69d71fedff1f975923ab52dcd196a0594c656aa8df7818d0024da74b95e674"
    },
})


export default axioxInstance;


