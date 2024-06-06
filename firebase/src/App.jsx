import React, { useState } from 'react';

// UserForm Component
const UserForm = ({ createUser }) => {
  const [newUser, setNewUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(newUser);
    setNewUser("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
      />
      <button type="submit">Create User</button>
    </form>
  );
};

// UserItem Component
const UserItem = ({ user, updateUser, deleteUser }) => {
  const [editName, setEditName] = useState(user.name);

  return (
    <div>
      <h2>{user.name}</h2>
      <input
        type="text"
        value={editName}
        onChange={(e) => setEditName(e.target.value)}
      />
      <button onClick={() => updateUser(user.id, editName)}>Update</button>
      <button onClick={() => deleteUser(user.id)}>Delete</button>
    </div>
  );
};

// UserList Component
const UserList = ({ users, updateUser, deleteUser }) => {
  return (
    <div>
      {users.map((user) => (
        <UserItem 
          key={user.id} 
          user={user} 
          updateUser={updateUser} 
          deleteUser={deleteUser} 
        />
      ))}
    </div>
  );
};

// Main App Component
const App = () => {
  const [users, setUsers] = useState([]);

  const createUser = (name) => {
    const newUser = {
      id: users.length ? users[users.length - 1].id + 1 : 1,
      name
    };
    setUsers([...users, newUser]);
  };

  const updateUser = (id, newName) => {
    setUsers(users.map(user => (user.id === id ? { ...user, name: newName } : user)));
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm createUser={createUser} />
      <UserList users={users} updateUser={updateUser} deleteUser={deleteUser} />
    </div>
  );
};

export default App;
