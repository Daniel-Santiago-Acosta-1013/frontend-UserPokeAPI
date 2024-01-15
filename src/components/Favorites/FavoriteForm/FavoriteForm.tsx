import React, { useState } from 'react';
import { addFavoritePokemon } from '../../../api/pokemonService';
import Swal from 'sweetalert2';
import axios from 'axios';
import './favoriteForm.scss';

const FavoriteForm = () => {
    const [pokemonName, setPokemonName] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await addFavoritePokemon(pokemonName);
            setPokemonName('');
            window.location.reload();
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                Swal.fire({
                    title: 'Error!',
                    text: error.response.data.error || 'Error al añadir Pokémon favorito',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
                console.error('Error al añadir Pokémon favorito', error.response.data.error);
            }
            console.error('Error al añadir Pokémon favorito', error);
        }
    };

    return (
        <div className="favorite-form">
            <form onSubmit={handleSubmit}>
                <input type="text" value={pokemonName} onChange={(e) => setPokemonName(e.target.value)} placeholder="Nombre del Pokémon" />
                <button type="submit">Añadir a Favoritos</button>
            </form>
        </div>
    );
};

export default FavoriteForm;
