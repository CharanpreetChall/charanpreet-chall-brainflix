import axios from 'axios';

const API_key= "?api_key=fbb11fd1-b1f6-4147-a8ae-a87205ac574f"

const url= "https://project-2-api.herokuapp.com/"

export default {
    getAll: () => axios.get(`${url}videos${API_key}`),
    getVideoById: (id) => axios.get(`${url}videos/${id}${API_key}`)
}