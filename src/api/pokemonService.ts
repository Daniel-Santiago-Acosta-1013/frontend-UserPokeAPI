import axios from 'axios';

const API_URL = 'http://localhost:3000/users';

export const addFavoritePokemon = async (pokemonName: string) => {
    const response = await axios.post(`${API_URL}/favorites`, { pokemonName });
    return response.data;
};

export const getFavoritePokemons = async (userId: string) => {
    const response = await axios.get(`${API_URL}/favorites/${userId}`);
    return response.data;
};

export const removeFavoritePokemon = async (pokemonId: string) => {
    const response = await axios.delete(`${API_URL}/favorites/${pokemonId}`);
    return response.data;
};

export const editFavoritePokemon = async (pokemonId: string, updateData: { name?: string, type?: string }) => {
    const response = await axios.put(`${API_URL}/favorites/${pokemonId}`, updateData);
    return response.data;
};