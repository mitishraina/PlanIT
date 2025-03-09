import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
    const [username, setUsername] = useState("");
    const [fullName, setFullName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [profilePhoto, setProfilePhoto] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const profileData = {
            username,
            fullName,
            dateOfBirth,
            profilePhoto,
        };

        localStorage.setItem("userProfile", JSON.stringify(profileData));
        navigate("/");
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePhoto(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex justify-center p-24 bg-[#C9C9C9]">
            <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
                <div className="flex justify-center flex-col gap-1.5 border border-gray-500 rounded-xl bg-gray-400 p-5">
                    <div className="">
                        <label htmlFor="username" className="block text-sm font-medium text-white">Username</label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-white">Full Name</label>
                        <input
                            id="fullName"
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="dateOfBirth" className="block text-sm font-medium text-white">Date of Birth</label>
                        <input
                            id="dateOfBirth"
                            type="date"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="profilePhoto" className="block text-sm font-medium text-white">Profile Photo</label>
                        <input
                            id="profilePhoto"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 text-white bg-black rounded-md cursor-pointer"
                    >
                        Create Profile
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProfileForm;