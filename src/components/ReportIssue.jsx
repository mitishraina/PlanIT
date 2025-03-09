import React, { useState } from "react";
import { Button } from "./ui/Button";
import { X } from "lucide-react"; 
import { ToastContainer, toast } from "react-toastify"; 

const ReportIssue = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [issueDescription, setIssueDescription] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Issue Description:", issueDescription);
        console.log("Image:", image);

        // Show success toast notification
        toast.success("Issue reported successfully!", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        toast.success('Yayy!! You earned 100 Green Points', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });


        toast.info('CheckOut Rewards to redeem', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });


        setIsOpen(false);
        setIssueDescription("");
        setImage(null);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setImage(null);
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-black text-white px-4 py-2 rounded-full shadow-lg hover:bg-white hover:text-black"
            >
                Report an Issue
            </Button>

            {isOpen && (
                <div className="fixed bottom-16 right-4 bg-white p-6 rounded-lg shadow-lg w-96">
                    <h2 className="text-xl font-bold mb-4 ">Report an Issue</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="issueDescription" className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <textarea
                                id="issueDescription"
                                value={issueDescription}
                                onChange={(e) => setIssueDescription(e.target.value)}
                                required
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows={4}
                            />
                        </div>
                        <div>
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                Attach Image
                            </label>
                            <input
                                id="image"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Image Preview */}
                        {image && (
                            <div className="relative">
                                <img
                                    src={image}
                                    alt="Preview"
                                    className="w-full h-32 object-cover rounded-md"
                                />
                                <button
                                    type="button"
                                    onClick={handleRemoveImage}
                                    className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-sm hover:bg-gray-100"
                                >
                                    <X className="w-4 h-4 text-gray-700" />
                                </button>
                            </div>
                        )}

                        <Button type="submit" className="w-full">
                            Submit
                        </Button>
                    </form>
                </div>
            )}

            {/* Toast Container */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />
        </div>
    );
};

export default ReportIssue;