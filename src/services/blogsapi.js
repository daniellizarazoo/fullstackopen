import axios from 'axios';
const baseUrl= 'http://localhost:3001/api/blogs'

let token = null

const setToken = newToken =>{}

const getBlogs = async () => {
    try{
        const request = await axios.get(baseUrl)
        return request.data
    }
    catch(error){
        console.log('Fail: ', error.message)
        throw error
    }
}

export  default {getBlogs}
