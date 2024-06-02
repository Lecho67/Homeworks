import React, { useState, useEffect } from 'react';
import { useCollection } from './firebase/firestore';
import './styles/crud.css';

export const Crud = () => {
  const [user, setUser] = useState({ name: '' });
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState('');
  const { add, getAll, isPending, results = [], update, remove } = useCollection("users");

  const getAllDocs = async () => {
    try {
      await getAll([]);
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  };

  const save = async () => {
    try {
      await add(user);
      await getAllDocs();
      setUser({ name: '' });
    } catch (error) {
      console.error('Error adding document:', error);
    }
  };

  const startEdit = (id, currentName) => {
    setEditingId(id);
    setEditingName(currentName);
  };

  const handleUpdate = async () => {
    if (editingId) {
      try {
        await update(editingId, { name: editingName });
        await getAllDocs();
        setEditingId(null);
        setEditingName('');
      } catch (error) {
        console.error('Error updating document:', error);
      }
    }
  };

  const handleRemove = async (id) => {
    try {
      await remove(id);
      await getAllDocs();
    } catch (error) {
      console.error('Error removing document:', error);
    }
  };

  const handleChange = (event) => {
    setUser({ name: event.target.value });
  };

  const handleEditChange = (event) => {
    setEditingName(event.target.value);
  };

  useEffect(() => {
    getAllDocs();
  }, []);

  return (
    <div className="crud-container">
      <input 
        type='text' 
        onChange={handleChange} 
        value={user.name} 
        placeholder="Enter name" 
        aria-label="Enter name"
      />
      <button type='button' onClick={save} disabled={isPending || !user.name}>
        {isPending ? 'Saving...' : 'Guardar'}
      </button>
      {isPending && <span>Loading...</span>}
      <ul>
        {results.length > 0 ? (
          results.map((item, index) => (
            <li key={`${item.id}-${index}`}>
              {editingId === item.id ? (
                <>
                  <input
                    type='text'
                    value={editingName}
                    onChange={handleEditChange}
                    aria-label="Edit name"
                  />
                  <div className="buttons">
                    <button onClick={handleUpdate} disabled={isPending || !editingName}>
                      {isPending ? 'Updating...' : 'Guardar cambios'}
                    </button>
                    <button onClick={() => setEditingId(null)} disabled={isPending}>
                      Cancelar
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {item.name}
                  <div className="buttons">
                    <button onClick={() => startEdit(item.id, item.name)} disabled={isPending}>
                      Editar
                    </button>
                    <button onClick={() => handleRemove(item.id)} disabled={isPending}>
                      Eliminar
                    </button>
                  </div>
                </>
              )}
            </li>
          ))
        ) : (
          <li>No users found</li>
        )}
      </ul>
    </div>
  );
};
