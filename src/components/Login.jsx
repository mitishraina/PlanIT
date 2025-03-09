import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const isSuccess = true;
        if (isSuccess) {
            navigate("/");
        } else {
            alert("Login failed!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <form
                onSubmit={handleLogin}
                className="p-6 bg-gray-200 rounded-md shadow-md w-96"
            >
                <h2 className="text-3xl font-bold mb-4">Login</h2>
                <p className="text-gray-500 mb-4">Enter you email below to login or use Google account</p>
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
                    <div className="flex justify-between">
                        <label htmlFor="password" className="block text-sm font-medium text-black">
                            Password
                        </label>
                        <p className="block text-sm font-medium text-blue-700 hover:underline cursor-pointer">Forgot your Password?</p>

                    </div>
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
                    Login
                </button>
                <hr />
                <button
                    type="submit"
                    className="w-full py-2 px-4 mt-4 text-white bg-black rounded-md cursor-pointer flex justify-center gap-3 items-center"
                >
                    <img src='google.jpg' className="h-7 w-7"></img>
                    Login with Google
                </button>
                <div className="text-black text-center mt-1.5">
                    Don't have an account? <a href='/signup' className="text-blue-700 font-semibold hover:underline">Sign-Up</a>
                </div>
            </form>
        </div>
    );
};

export default Login;
