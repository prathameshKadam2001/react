import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger2-4a15a-default-rtdb.firebaseio.com/'
});

export default instance;
