import React, { useState } from 'react';
import { IPokemon } from '../../../types';
import { editFavoritePokemon } from '../../../api/pokemonService';

interface EditFormProps {
    pokemon: IPokemon;
    updateFavorites: () => void;
    onCancel: () => void;
}

const EditForm: React.FC<EditFormProps> = ({ pokemon, updateFavorites, onCancel }) => {
    const [newName, setNewName] = useState(pokemon.name);
    const [newType, setNewType] = useState(pokemon.type);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await editFavoritePokemon(pokemon._id, { name: newName, type: newType });
            updateFavorites();
        } catch (error) {
            console.error('Error al editar Pokémon favorito', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
            <input type="text" value={newType} onChange={(e) => setNewType(e.target.value)} />
            <button type="submit">Guardar</button>
            <button onClick={onCancel}>Cancelar</button>
        </form>
    );
};

export default EditForm;
