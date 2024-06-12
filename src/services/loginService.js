import axios from "axios";
const api = axios;
const baseUrl = 'http://localhost:3001/api/login'

const login = async credentials => {
    const response = await api.post(baseUrl, credentials)
    return response.data
}

export default {login}