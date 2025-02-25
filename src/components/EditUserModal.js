"use client";
import { useState, useEffect } from "react";

export default function EditUserModal({
  user,
  setIsEditModalOpen,
  fetchUsers,
}) {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [age, setAge] = useState(user.age);
  const [message, setMessage] = useState(user.message);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/users/${user._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, age, message }),
    });

    if (res.ok) {
      fetchUsers();
      setIsEditModalOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Edit User</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mb-4 p-2 w-full border rounded text-black"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mb-4 p-2 w-full border rounded text-black"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 p-2 w-full border rounded text-black"
            required
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="mb-4 p-2 w-full border rounded text-black"
            required
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mb-4 p-2 w-full border rounded text-black"
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
