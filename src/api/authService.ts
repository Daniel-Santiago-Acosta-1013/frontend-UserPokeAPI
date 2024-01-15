import axiosInstance from './axiosInstance';

export const loginUser = async (username: string, password: string) => {
    const response = await axiosInstance.post(`/login`, { username, password });
    return response.data;
};

export const registerUser = async (username: string, password: string) => {
    const response = await axiosInstance.post(`/createUser`, { username, password });
    return response.data;
};