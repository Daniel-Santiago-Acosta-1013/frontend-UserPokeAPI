import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const loginUser = async (username: string, password: string) => {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
};

export const registerUser = async (username: string, password: string) => {
    const response = await axios.post(`${API_URL}/createUser`, { username, password });
    return response.data;
};