import axios from "axios";

const url = axios.create({
    baseURL: "https://redux-toolkit-jobster-api-server.onrender.com/api/v1",
})

export default url;