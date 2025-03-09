import React from "react";

const Profile = () => {
    // Retrieve profile data from local storage
    const userProfile = JSON.parse(localStorage.getItem("userProfile"));

    return (
        <div className="min-h-screen bg-[#C9C9C9] flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-6">Profile</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <p className="mt-1 p-2 bg-gray-100 rounded-md">{userProfile.username}</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <p className="mt-1 p-2 bg-gray-100 rounded-md">{userProfile.fullName}</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                        <p className="mt-1 p-2 bg-gray-100 rounded-md">{userProfile.dateOfBirth}</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Total Credits Earned</label>
                        <p className="mt-1 p-2 bg-gray-100 rounded-md">500</p> {/* Random number */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;