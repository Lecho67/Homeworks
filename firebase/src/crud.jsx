import React, { useState, useEffect } from 'react';
import { db } from './firebase/config';
import {
  collection,
  addDoc,
  onSnapshot,
  updateDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';

const Crud = () => {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState('');
  const [editName, setEditName] = useState({}); // State to manage each user's update input

  const usersCollectionRef = collection(db, 'users');

  // Function to add a new user to the Firestore database
  const createUser = async (name) => {
    if (name.trim()) {
      await addDoc(usersCollectionRef, { name });
      setNewName('');
    }
  };

  // Effect to fetch and listen for changes in the Firestore collection
  useEffect(() => {
    const unsubscribe = onSnapshot(usersCollectionRef, (snapshot) => {
      setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return () => unsubscribe();
  }, []);

  // Function to update a user's name in the Firestore database
  const updateUser = async (id) => {
    if (editName[id]?.trim()) {
      const userDoc = doc(db, 'users', id);
      await updateDoc(userDoc, { name: editName[id] });
      setEditName((prev) => ({ ...prev, [id]: '' })); // Clear the input after updating
    }
  };

  // Function to delete a user from the Firestore database
  const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc);
  };

  return (
    <div>
      <h1>User Management</h1>
      <div>
        <input
          type="text"
          placeholder="New User Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button onClick={() => createUser(newName)}>Add User</button>
      </div>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <input
              type="text"
              placeholder="Update User Name"
              value={editName[user.id] || ''}
              onChange={(e) => setEditName({ ...editName, [user.id]: e.target.value })}
            />
            <button onClick={() => updateUser(user.id)}>Update</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crud;
