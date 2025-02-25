"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName, email, password }),
    });

    if (res.ok) {
      router.push("/login");
    } else {
      alert("Signup failed");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side - Sign Up Form */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-4/5 max-w-md">
          <h1 className="text-4xl font-bold mb-6 text-black">
            Get Started Now
          </h1>
          <p className="text-gray-600 mb-6">
            Enter your credentials to access your account
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter your name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="text-black w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-black w-full p-3 border-2 border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                placeholder="Password (min 8 chars)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-black w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-6">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="text-black w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md text-lg font-medium"
            >
              Sign Up
            </button>
          </form>
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-500 hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Blue background with image */}
      <div className="w-1/2 bg-blue-600 flex flex-col items-center justify-center text-white p-8">
        <div className="max-w-lg">
          <h2 className="text-4xl font-bold mb-4">
            The simplest way to manage your workforce
          </h2>
          <p className="text-xl mb-8">
            Enter your credentials to access your account
          </p>

          <div className="relative w-full h-96">
            {/* You may need to add the actual dashboard image here */}
            <div className="bg-white rounded-lg p-4 overflow-hidden">
              <img
                src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/5fd3f14483b893d61ed15e395633ebfb6a960145"
                alt="Dashboard preview"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
