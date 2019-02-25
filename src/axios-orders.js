import Axios from 'axios';

const instance = Axios.create({
    baseURL: "https://react-burger-app-4950b.firebaseio.com/"
});

export default instance;