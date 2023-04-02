import React, { useState, useEffect } from 'react';

function Update() {
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editUser, setEditUser] = useState({});

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditUser(users[index]);
  };

  const handleUpdate = () => {
    const updatedUsers = [...users];
    updatedUsers[editIndex] = editUser;

    fetch(`https://fakestoreapi.com/products/${editUser.id}`, {
      method: 'PUT',
      body: JSON.stringify(editUser),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
      })
      .then((response) => response.json())
      .then(() => {
          // Atualiza o estado dos usuários com o array atualizado
          setUsers(updatedUsers);
          // Limpa o índice de edição e o usuário em edição
          setEditIndex(null);
          setEditUser({});
      });
  };

  return (
    <div>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>Tile</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              {editIndex === index ? (
                <>
                  <td>
                    <input
                      type="text"
                      value={editUser.title}
                      onChange={(e) =>
                        setEditUser({ ...editUser, title: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editUser.price}
                      onChange={(e) =>
                        setEditUser({ ...editUser, price: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editUser.description}
                      onChange={(e) =>
                        setEditUser({ ...editUser, description: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <button onClick={handleUpdate}>Update</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{user.title}</td>
                  <td>{user.price}</td>
                  <td>{user.description}</td>
                  <td>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Update;
