import React, { useState } from 'react';
import { IPokemon } from '../../../types';
import { removeFavoritePokemon, editFavoritePokemon } from '../../../api/pokemonService';
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

    const handleEdit = async (pokemonId: string, newName: string, newType: string) => {
        try {
            await editFavoritePokemon(pokemonId, { name: newName, type: newType });
            updateFavorites();
            setEditState(prevState => ({ ...prevState, [pokemonId]: false }));
        } catch (error) {
            console.error('Error al editar Pokémon favorito', error);
        }
    };

    const renderEditForm = (pokemon: IPokemon) => {
        const [newName, setNewName] = useState(pokemon.name);
        const [newType, setNewType] = useState(pokemon.type);

        return (
            <form onSubmit={(e) => { e.preventDefault(); handleEdit(pokemon._id, newName, newType); }}>
                <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
                <input type="text" value={newType} onChange={(e) => setNewType(e.target.value)} />
                <button type="submit">Guardar</button>
                <button onClick={() => setEditState(prevState => ({ ...prevState, [pokemon._id]: false }))}>Cancelar</button>
            </form>
        );
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
                                <td colSpan={3}>{renderEditForm(pokemon)}</td>
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