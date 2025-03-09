import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        // Simulate a successful signup
        navigate("/profileform"); // Redirect to ProfileForm.jsx
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <form
                onSubmit={handleSignup}
                className="p-6 bg-gray-200 rounded-md shadow-md w-96"
            >
                <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
                <p className="text-gray-500 mb-4">Create an account below to get started or use Google account</p>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-black">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-black">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Create a strong password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 mb-4 text-white bg-black rounded-md cursor-pointer"
                >
                    Sign Up
                </button>
                <hr />
                <button
                    type="button"
                    className="w-full py-2 px-4 mt-4 text-white bg-black rounded-md cursor-pointer flex justify-center gap-3 items-center"
                >
                    <img src='google.jpg' className="h-7 w-7" alt="Google Logo"></img>
                    Sign Up with Google
                </button>
                <div className="text-black text-center mt-2">
                    Already have an account? <a href='/login' className="text-blue-700 font-semibold hover:underline">Login</a>
                </div>
            </form>
        </div>
    );
};

export default Signup;