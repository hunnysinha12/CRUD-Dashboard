"use client";
import { useState } from "react";
import EditUserModal from "./EditUserModal";

export default function UserTable({ users, fetchUsers }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleDelete = async (id) => {
    const res = await fetch(`/api/users/${id}`, { method: "DELETE" });
    if (res.ok) {
      fetchUsers();
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  return (
    <>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">First Name</th>
            <th className="border p-2">Last Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">Message</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="border p-2">{user.firstName}</td>
              <td className="border p-2">{user.lastName}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.age}</td>
              <td className="border p-2">{user.message}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleEdit(user)}
                  className="bg-yellow-500 text-white p-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="bg-red-500 text-white p-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditModalOpen && (
        <EditUserModal
          user={selectedUser}
          setIsEditModalOpen={setIsEditModalOpen}
          fetchUsers={fetchUsers}
        />
      )}
    </>
  );
}
