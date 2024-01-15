import React, { useState } from 'react';
import { IPokemon } from '../../../types';
import { removeFavoritePokemon } from '../../../api/pokemonService';
import EditForm from '../EditForm/EditForm';
import './favoriteTable.scss';

interface FavoriteTableProps {
    favorites: IPokemon[];
    updateFavorites: () => void;
}

const FavoriteTable: React.FC<FavoriteTableProps> = ({ favorites, updateFavorites }) => {
    const [editState, setEditState] = useState<{ [key: string]: boolean }>({});

    const handleDelete = async (pokemonId: string) => {
        try {
            await removeFavoritePokemon(pokemonId);
            updateFavorites();
        } catch (error) {
            console.error('Error al eliminar Pokémon favorito', error);
        }
    };

    return (
        <div className="favorite-table">
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {favorites.map(pokemon => (
                        <tr key={pokemon._id}>
                            {editState[pokemon._id] ? (
                                <td colSpan={3}>
                                    <EditForm
                                        pokemon={pokemon}
                                        updateFavorites={updateFavorites}
                                        onCancel={() => setEditState(prevState => ({ ...prevState, [pokemon._id]: false }))}
                                    />
                                </td>
                            ) : (
                                <>
                                    <td>{pokemon.name}</td>
                                    <td>{pokemon.type}</td>
                                    <td>
                                        <button onClick={() => setEditState(prevState => ({ ...prevState, [pokemon._id]: true }))}>Editar</button>
                                        <button onClick={() => handleDelete(pokemon._id)}>Eliminar</button>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FavoriteTable;