import axios from 'axios';
const baseUrl= 'http://localhost:3001/api/persons'

const getAll = async () => {
    try{
        const request = await axios.get(baseUrl)
        return request.data
    }
    catch(error){
        console.log('Fail: ', error.message)
        throw error
    }
}

const addNewPhone = async (newObject) => {
    try{
        const request = await axios.post(baseUrl,newObject)
        return request.data
    }
    catch(error){
        console.log('Error.message: ', error.message)
        throw error
    }
}

const deletePhone = async (id) => {
    try{
        const urlModified = baseUrl+`/${id}`
        await axios.delete(urlModified)
        console.log('la data ha sido eliminado')
        
    }
    catch(error){
        throw error
    }
}

const updatePhone = async (id,modifiedObject) =>{
    try{
        const urlModified = baseUrl+`/${id}`
        await axios.put(urlModified,modifiedObject)
    }
    catch(error){
        throw error
    }
}

export  default {getAll,addNewPhone,deletePhone,updatePhone}
