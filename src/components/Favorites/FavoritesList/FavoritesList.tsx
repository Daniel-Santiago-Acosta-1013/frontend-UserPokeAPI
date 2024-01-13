import { useEffect, useState } from 'react';
import { getFavoritePokemons } from '../../../api/pokemonService';
import { IPokemon } from '../../../types';
import FavoriteTable from '../FavoriteTable/FavoriteTable';
import './favoritesList.scss';

const FavoritesList = () => {
    const [favorites, setFavorites] = useState<IPokemon[]>([]);

    const fetchFavorites = async () => {
        try {
            const userId = '';
            const fetchedFavorites = await getFavoritePokemons(userId);
            setFavorites(fetchedFavorites);
        } catch (error) {
            console.error('Error al obtener Pokémones favoritos', error);
        }
    };

    useEffect(() => {
        fetchFavorites();
    }, []);

    return (
        <div className="favorites-list">
            <h2>Pokémones Favoritos</h2>
            <FavoriteTable favorites={favorites} updateFavorites={fetchFavorites} />
        </div>
    );
};

export default FavoritesList;
