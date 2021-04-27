import axios from 'axios'
// const URL = "http://localhost:8001/formation-cpf/"

const addNewLead = async (url, obj) => {
    let resp = await axios.post(url, obj)
    return resp.data;
};

export default {addNewLead};