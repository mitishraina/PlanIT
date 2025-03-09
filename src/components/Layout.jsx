import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/Button";
import { useState } from "react";

export default function Layout({ children }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    const userProfile = JSON.parse(localStorage.getItem("userProfile"));


    const handleLogout = () => {
        localStorage.removeItem("userProfile"); 
        setIsDropdownOpen(false); 
        navigate("/"); 
    };


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-[#C9C9C9]">
                <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="/" className="font-bold text-5xl">
                        <span className="flex justify-center items-center text-center gap-2">
                            PlanIT <img className="h-10" src="./icon.png" alt="logo"></img>
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-6">
                        <Link
                            to="/"
                            className={`hover:text-white text-xl font-semibold ${location.pathname === "/" ? "text-white" : ""}`}
                        >
                            HOME
                        </Link>
                        <Link
                            to="/about"
                            className={`hover:text-white text-xl font-semibold ${location.pathname === "/about" ? "text-white" : ""}`}
                        >
                            ABOUT US
                        </Link>
                        <Link
                            to="/owners"
                            className={`hover:text-white text-xl font-semibold ${location.pathname === "/owners" ? "text-white" : ""}`}
                        >
                            OWNERS
                        </Link>
                        <Link
                            to="/contact"
                            className={`hover:text-white text-xl font-semibold ${location.pathname === "/contact" ? "text-white" : ""}`}
                        >
                            CONTACT US
                        </Link>
                    </div>
                    <div className="flex items-center space-x-2">
                        {userProfile ? (
                            <div className="relative">
                                <div
                                    className="flex items-center space-x-2 cursor-pointer "
                                    onClick={toggleDropdown}
                                >
                                    <img
                                        src={userProfile.profilePhoto}
                                        alt="Profile"
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <span className="text-white">{userProfile.fullName}</span>
                                </div>
                                {isDropdownOpen && (
                                    <div className="absolute top-12 right-0 bg-white shadow-lg rounded-md w-48 z-10">
                                        <ul className="py-2 z-10">
                                            <li>
                                                <Link
                                                    to="/profile"
                                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                                    onClick={() => setIsDropdownOpen(false)}
                                                >
                                                    Profile
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/rewards"
                                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                                    onClick={() => setIsDropdownOpen(false)}
                                                >
                                                    Rewards
                                                </Link>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={handleLogout}
                                                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                                >
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                <Button
                                    className="hover:border hover:border-white cursor-pointer"
                                    variant="primary"
                                >
                                    <Link to="/login">LOGIN</Link>
                                </Button>
                                <Button className="hover:border hover:border-black cursor-pointer" variant="ghost">
                                    <Link to="/signup">SIGNUP</Link>
                                </Button>
                            </>
                        )}
                    </div>
                </nav>
            </header>

            <main className="flex-1">{children}</main>

            <footer className="w-full font-semibold text-xl">
                <div className="container px-36 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                            <h3 className="font-bold mb-4 text-3xl flex items-center gap-2">PlanIT<img className="h-7" src="./icon.png"></img></h3>
                            <p className="text-sm text-gray-500">PlanIT - Revolutionizing Urban Mobility and Planning. Your one way platform for saving PlanIT.</p>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4 text-3xl">Created by</h3>
                            <ul className="text-sm text-gray-500 space-y-2">
                                <li>Mitish Raina</li>
                                <li>Rishita Sharma</li>
                                <li>Paarth Sharma</li>
                                <li>Sarthak Sharma</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4 text-3xl">Useful Links</h3>
                            <ul className="text-sm text-gray-500 space-y-2">
                                <li>
                                    <Link to="/about">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Conact Us</Link>
                                </li>
                                <li>
                                    <Link to="">Be Our Partner</Link>
                                </li>
                                <li>
                                    <Link to="">F.A.Q</Link>
                                </li>
                                <li>
                                    <Link to="/privacy">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4 text-3xl">Contact</h3>
                            <ul className="text-sm text-gray-500 space-y-2">
                                <li className="flex items-center">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/srsgifqc.json"
                                        style={{ width: "28px" }}>
                                    </lord-icon>Phone: (896) 675-9493</li>

                                <li className="flex items-center">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/xtzvywzp.json"
                                        style={{ width: "28px" }}>
                                    </lord-icon>Email: saveplanit@planit.com</li>

                                <li className="flex items-center">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/wmwqvixz.json"
                                        style={{ width: "55px" }}>
                                    </lord-icon>Address: Plot no 32, 34, Knowledge Park III, Greater Noida, Uttar Pradesh-201310</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <span className="flex justify-center text-sm text-gray-500">
                    ©Copyright PlanIT 2025. Designed by Pixie Chicks
                </span>
            </footer>
        </div>
    );
}