import axiosInstance from './axiosInstance';

export const addFavoritePokemon = async (pokemonName: string) => {
    const response = await axiosInstance.post(`/favorites`, { pokemonName });
    return response.data;
};

export const getFavoritePokemons = async (userId: string) => {
    const response = await axiosInstance.get(`/favorites/${userId}`);
    return response.data;
};

export const removeFavoritePokemon = async (pokemonId: string) => {
    const response = await axiosInstance.delete(`/favorites/${pokemonId}`);
    return response.data;
};

export const editFavoritePokemon = async (pokemonId: string, updateData: { name?: string, type?: string }) => {
    const response = await axiosInstance.put(`/favorites/${pokemonId}`, updateData);
    return response.data;
};