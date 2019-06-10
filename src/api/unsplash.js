import axios from 'axios';

export default  axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 1984daaaa541add4f48197a1f1cfb417c15b66aaee602b8f6d57278228619fa1'
    }
 });


