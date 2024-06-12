import axios from 'axios';
const baseUrl= 'http://localhost:3001/api/blogs'

let token = null

const setToken = newToken =>{
    token = `Bearer ${newToken}` 
    console.log(token);
}

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

const getBlogsByUser = async () => {
    try{
        const config = {
            headers: {Authorization: token},
        }
        const request = await axios.get(`${baseUrl}/fromuser`,config)
        return request.data

    } catch(error){
        throw(error)
    }
}

const create = async newObject => {
    const config = {

    }
}

export  default {getBlogs,setToken,getBlogsByUser}