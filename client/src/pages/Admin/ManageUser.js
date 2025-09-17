import React, { useEffect, useState } from 'react';
import SummaryApi from '../../common/connect.js';
import "../../styles/pages/Admin/Manageuser.css";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(SummaryApi.ViewUser.url, {
          method: SummaryApi.ViewUser.method,
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error("Unable to fetch users");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError('Failed to load users.');
        setTimeout(() => setError(''), 3000);
      }
    };

    fetchUsers();
  }, []);

  // Delete user
  const handleDelete = async (userId) => {
    try {
      const deleteUrl = SummaryApi.ManageUser.url.replace(':id', userId);

      const response = await fetch(deleteUrl, {
        method: SummaryApi.ManageUser.method,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      setUsers((prevUsers) => prevUsers.filter(user => user._id !== userId));
      setSuccess('User deleted successfully.');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to delete user.');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="manage-users-container">
      <h1>Manage Users</h1>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}

      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map(user => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button className="delete-button" onClick={() => handleDelete(user._id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
