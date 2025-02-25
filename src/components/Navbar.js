'use client';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push('/login');
  };

  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl">Dashboard</h1>
      {session && (
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center focus:outline-none"
          >
            <span className="mr-2">{session.user.email}</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg text-black">
              <button
                onClick={handleLogout}
                className="block w-full px-4 py-2 text-left hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}