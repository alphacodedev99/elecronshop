import axios from 'axios';

class UserService {
    static loggdIn = (body) => axios.post('/auth/login', body);
}

export default UserService;