import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getAllUsers = async () => {
    const response = await axios.get(`${API_URL}/getUsers`);
    return response.data;
};
