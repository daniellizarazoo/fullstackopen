import axios from "axios";
const api = axios;
const baseUrl = 'http://localhost:3001/api/login'

const login = async credentials => {
    const response = await api.post(baseUrl, credentials)
    console.log("response.data>>>> ",response.data);
    return response.data
}

export default {login}