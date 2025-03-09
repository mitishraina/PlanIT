import { Search, MapPin, X } from "lucide-react";
import { Button } from "../components/ui/Button";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/Tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/Card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/Select"
import { Factory, Leaf, DollarSign } from "lucide-react"
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { ToastContainer, toast } from 'react-toastify';

const factoryData = [
    { id: 1, name: "EcoTech Industries", credits: 500, price: 25, type: "sell" },
    { id: 2, name: "GreenPower Co.", credits: 300, price: 28, type: "sell" },
    { id: 3, name: "Sustainable Solutions Ltd.", credits: 1000, price: 22, type: "sell" },
    { id: 4, name: "Clean Energy Corp", credits: 0, price: 26, type: "buy" },
    { id: 5, name: "Eco Innovations Inc.", credits: 0, price: 24, type: "buy" },
    { id: 6, name: "Green Future Enterprises", credits: 0, price: 27, type: "buy" },
]



export default function Home() {
    const [stopQuery, setStopQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState("buy")
    const [factories, setFactories] = useState(factoryData)
    const [routes, setRoutes] = useState([]);

    const [parkingQuery, setParkingQuery] = useState("");
    const [isParkingPopUpOpen, setIsParkingPopUpOpen] = useState(false);

    const handleSearchParking = () => {
        if (parkingQuery) {
            setIsParkingPopUpOpen(true);
            toast.info('Yayy!! You earned 100 Green points', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };




    const fetchData = async () => {
        if (!stopQuery) {
            setError("Please enter a stop name or location.");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const routeResponse = await fetch(
                `https://transit.land/api/v2/rest/routes?operated_by=o-ttn-delhitransportcorporation&apikey=<YOUR_API_KEY>`
            );
            const routeData = await routeResponse.json();

            if (!routeData.routes || routeData.routes.length === 0) {
                setError("No routes found for the given query.");
                setRoutes([]);
            } else {
                const validRoutes = routeData.routes.filter(
                    (route) =>
                        route.geometry &&
                        Array.isArray(route.geometry.coordinates) &&
                        route.geometry.coordinates.length > 0
                );

                if (validRoutes.length === 0) {
                    setError("No valid routes found.");
                }

                setRoutes(validRoutes);
            }
        } catch (err) {
            setError("There is some error with API.");
            setRoutes([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Tabs defaultValue="buy" className="bg-[#C9C9C9]">
                <div className="">
                    <TabsList className="grid grid-cols-2 max-w-4xl mx-auto bg-[#C9C9C9]">
                        <TabsTrigger value="buy" onClick={() => setActiveTab("buy")}>
                            PlanIT Journey
                        </TabsTrigger>
                        <TabsTrigger value="sell" onClick={() => setActiveTab("sell")}>
                            PlanIT Emergency
                        </TabsTrigger>
                    </TabsList>

                </div>
                <TabsContent value="buy">
                    <div className="mt-10">
                        <section className="relative bg-[#C9C9C9] min-h-[90vh]">
                            <div>
                                <section className=" bg-[#C9C9C9]">
                                    <div className="container mx-auto px-4">

                                    </div>
                                </section>

                            </div>
                            <div className="relative max-h-[80vh]">
                                <img
                                    src="/dtc.webp"
                                    alt="bus"
                                    className="absolute my-1 inset-0 w-[1200px] h-[75vh] object-cover rounded-4xl m-auto"
                                />
                                <div className="container px-10 flex justify-center relative ">
                                    <div className="flex justify-center flex-start flex-col my-84">
                                        <div className="-mx-6">
                                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                                <span className="text-blue-400">Go to </span>
                                                <span className="text-white">your destination.</span>
                                            </h1>
                                            <pre className="text-white font-semibold text-2xl mb-6">
                                                <span className="text-blue-400">Book your </span>bus tickets for your next journey with us.
                                                <span className="font-bold text-3xl">BOOK NOW!</span>
                                            </pre>
                                        </div>
                                        <div className="w-[70vw]">
                                            <div className="bg-white p-6 rounded-2xl shadow-xl my-18">
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                                    <div className="h">
                                                        <div className="flex flex-col">
                                                            <label className="block text-lg font-bold mb-2">Location</label>
                                                            <div className="flex w-[1020px] justify-center items-center">
                                                                <div className="flex items-center justify-between gap-5 w-full">
                                                                    <div className="flex items-center gap-30">
                                                                        <div className="flex items-center justify-center">
                                                                            <div className="relative">
                                                                                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />

                                                                                <input
                                                                                    type="text"
                                                                                    placeholder="Enter Destination"
                                                                                    value={stopQuery}
                                                                                    onChange={(e) => setStopQuery(e.target.value)}
                                                                                    className="pl-10 p-2 border rounded-md w-66"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex gap-18">

                                                                            <div className="mb-4">
                                                                                <label className="block text-sm font-medium text-black" htmlFor="time">
                                                                                    Select Time (12-hour format)
                                                                                </label>
                                                                                <select
                                                                                    id="time"
                                                                                    className="w-full p-2 rounded-md text-black border-1 border-black"
                                                                                    required
                                                                                >
                                                                                    <option value="">Select a time</option>
                                                                                    <option value="07:00 AM">07:00 AM</option>
                                                                                    <option value="08:00 AM">08:00 AM</option>
                                                                                    <option value="09:00 AM">09:00 AM</option>
                                                                                    <option value="10:00 AM">10:00 AM</option>
                                                                                    <option value="11:00 AM">11:00 AM</option>
                                                                                    <option value="12:00 PM">12:00 PM</option>
                                                                                    <option value="01:00 PM">01:00 PM</option>
                                                                                    <option value="02:00 PM">02:00 PM</option>
                                                                                    <option value="03:00 PM">03:00 PM</option>
                                                                                    <option value="04:00 PM">04:00 PM</option>
                                                                                    <option value="05:00 PM">05:00 PM</option>
                                                                                    <option value="06:00 PM">06:00 PM</option>
                                                                                    <option value="07:00 PM">07:00 PM</option>
                                                                                    <option value="08:00 PM">08:00 PM</option>
                                                                                    <option value="09:00 PM">09:00 PM</option>
                                                                                    <option value="10:00 PM">10:00 PM</option>
                                                                                    <option value="11:00 PM">11:00 PM</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex items-center">
                                                                        <Button className="flex items-center w-50" onClick={fetchData}>
                                                                            <Search className="mr-3" size={19} />
                                                                            Search
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {loading && <p>Loading...</p>}
                                                            {error && <p style={{ color: "red" }}>{error}</p>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="relative bg-[#C9C9C9] min-h-[70vh]">
                            <div className="container px-4 ">
                                <div className="flex flex-col justify-center text-center gap-0">
                                    <h2 className="text-4xl font-extrabold mt-16 text-center">CARPOOL TO REDUCE YOUR EMISSION</h2>
                                    <div className="flex justify-center text-center text-gray-500">
                                        <p className="w-1/4 flex justify-center my-20 text-xl top-0">See the list of people offering carpool and save your emission.</p>
                                    </div>
                                    <div className="flex justify-center text-center items-center cursor-pointer">
                                        <p className="font-semibold flex items-center">BOOK YOUR RIDE WITH OTHERS
                                            <lord-icon
                                                src="https://cdn.lordicon.com/whtfgdfm.json">
                                            </lord-icon></p>
                                    </div>
                                </div>
                                <div className="relative py-60">
                                    <img src='./carpool.webp' className="absolute my-1 inset-0 w-[1200px] h-[75vh] object-cover rounded-4xl m-auto opacity-85" />
                                    <div className="flex justify-center items-center z-10 relative w-full">
                                        <div className="bg- rounded-lg p-8 w-1/4 flex justify-center flex-col">
                                            <h3 className="text-2xl font-bold mb-4 text-white">Find a carpool</h3>
                                            <input type="text" placeholder="Looking for a ride?" className="border-3 border-white rounded-lg px-2 py-1.5 font-semibold" />
                                            <p className="text-white font-semibold mb-6">Find travelers heading your way.</p>
                                            <div className="flex justify-center gap-2">
                                                <Button variant="outline">Search Rides</Button>
                                                <a className="text-black cursor-pointer bg-white hover:bg-black hover:text-white relative flex rounded-lg px-2 py-1.5 font-semibold">Register?</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="py-20 relative bg-[#C9C9C9] min-h-[50vh]">
                            <div className="container mx-auto px-4 max-w-[53vw]">
                                <h2 className="text-3xl font-bold mb-8 text-center">Most preferred Destinations</h2>
                                <p className="text-center text-xl ">Carpool to reduce carbon emission..</p>
                                <p className="text-center text-lg my-4">(Now you can <span className="text-2xl font-semibold">EARN REWARDS!!</span>)</p>
                                <div className="flex justify-center">
                                    <div className="flex gap-6 text-center">
                                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-80">
                                            <img src="/the-front-of-the-mall.jpg" alt="Destination" className="w-98 h-56 object-cover" />
                                            <div className="">
                                                <h3 className="font-bold text-xl flex mx-2 my-1.5">Garden Galleria Mall</h3>
                                                <p className="text-gray-600 text-sm flex justify-center items-center gap-6 p-2"><button className="bg-black text-white hover:bg-gray-700 cursor-pointer px-4 py-2 rounded-md font-medium">Go now</button> Reviews (112)</p>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-80">
                                            <img src="/sharda univ.jpeg" alt="Destination" className="w-98 h-56 object-cover" />
                                            <div className="">
                                                <h3 className="font-bold text-xl flex mx-2 my-1.5">Sharda University</h3>
                                                <p className="text-gray-600 text-sm flex justify-center items-center gap-6 p-2"><button className="bg-black text-white hover:bg-gray-700 cursor-pointer px-4 py-2 rounded-md font-medium">Go now</button> Reviews (1012)</p>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-80">
                                            <img src="/buddh.jpg" alt="Destination" className="w-98 h-56 object-cover" />
                                            <div className="">
                                                <h3 className="font-bold text-xl flex mx-2 my-1.5">Buddh International</h3>
                                                <p className="text-gray-600 text-sm flex justify-center items-center gap-6 p-2"><button className="bg-black text-white hover:bg-gray-700 cursor-pointer px-4 py-2 rounded-md font-medium">Go now</button> Reviews (289)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>

                        <section className="book-parking py-20 relative bg-[#C9C9C9] min-h-[60vh] flex justify-center">
                            <div className="border border-white rounded-4xl w-[70vw] flex bg-white items-center gap-1.5">
                                <div>
                                    <img src='./parking.jpg' alt='parking' className="parking"></img>
                                </div>
                                <div>
                                    <h1 className="text-black text-4xl font-semibold">Book Your Space now!!</h1>
                                    <p>Want to reduce your hassle of parking lines?</p>
                                    <p>BOOK YOUR <span className="font-bold">PARKING SPACE NOW</span></p>
                                    <div className="flex gap-2">
                                        <input
                                            type="search"
                                            name=""
                                            placeholder="Book your parking at.."
                                            id=""
                                            className="border-2 border-gray-300 rounded-xl p-1"
                                            value={parkingQuery}
                                            onChange={(e) => setParkingQuery(e.target.value)}
                                        />
                                        <button
                                            className="bg-black text-white hover:bg-gray-100 hover:text-black cursor-pointer rounded-xl w-16"
                                            onClick={handleSearchParking}
                                        >
                                            Search
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </section>
                        {isParkingPopUpOpen && (
                            <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-50 flex items-center justify-center">
                                <div className="bg-[#C9C9C9] rounded-lg shadow-lg p-6 w-[90vw] h-[85vh]">
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-2xl font-bold text-white mb-4">Book Your Parking</h2>
                                        <button
                                            className="bg-white text-black hover:bg-gray-100 cursor-pointer p-2 rounded-full"
                                            onClick={() => setIsParkingPopUpOpen(false)
                                            }
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <video
                                        className="w-full h-[60vh] object-cover rounded-lg mb-4"
                                        autoPlay
                                        loop
                                        muted
                                    >
                                        <source src="Booked.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>

                                    <div className="flex w-full flex-row justify-between items-center">
                                        <div className="mb-4">
                                            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-black ">Select Date</label>
                                            <input
                                                id="dateOfBirth"
                                                type="date"
                                                value={Date}
                                                required
                                                className="w-full px-3 py-2 rounded-md shadow-sm border-1 border-black"
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-black" htmlFor="time">
                                                Select Time (12-hour format)
                                            </label>
                                            <select
                                                id="time"
                                                className="w-full p-2 rounded-md text-black border-1 border-black"
                                                required
                                            >
                                                <option value="">Select a time</option>
                                                <option value="07:00 AM">07:00 AM</option>
                                                <option value="08:00 AM">08:00 AM</option>
                                                <option value="09:00 AM">09:00 AM</option>
                                                <option value="10:00 AM">10:00 AM</option>
                                                <option value="11:00 AM">11:00 AM</option>
                                                <option value="12:00 PM">12:00 PM</option>
                                                <option value="01:00 PM">01:00 PM</option>
                                                <option value="02:00 PM">02:00 PM</option>
                                                <option value="03:00 PM">03:00 PM</option>
                                                <option value="04:00 PM">04:00 PM</option>
                                                <option value="05:00 PM">05:00 PM</option>
                                                <option value="06:00 PM">06:00 PM</option>
                                                <option value="07:00 PM">07:00 PM</option>
                                                <option value="08:00 PM">08:00 PM</option>
                                                <option value="09:00 PM">09:00 PM</option>
                                                <option value="10:00 PM">10:00 PM</option>
                                                <option value="11:00 PM">11:00 PM</option>
                                            </select>
                                        </div>
                                        <div>
                                            <button
                                                className="w-fit-content hover:bg-white hover:text-black py-2 px-4 text-white bg-black font-semibold rounded-md cursor-pointer"
                                                onClick={() => {
                                                    setIsParkingPopUpOpen(false);
                                                    toast.info('Yayy!! You earned 100 Green points', {
                                                        position: "top-right",
                                                        autoClose: 5000,
                                                        hideProgressBar: false,
                                                        closeOnClick: true,
                                                        pauseOnHover: true,
                                                        draggable: true,
                                                        progress: undefined,
                                                        theme: "light",
                                                    });
                                                }}
                                            >
                                                BOOK YOUR PARKING
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}


                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112119.38271176121!2d77.24352058642746!3d28.57784805920261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea0f7b91511b%3A0x486f13bd49e5e7ae!2sSharda%20University!5e0!3m2!1sen!2sin!4v1737703527192!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full h-80"></iframe>
                        </div>

                        <img src='Banner.png' alt='banner' className=" w-full"></img>
                    </div>


                </TabsContent>
                <TabsContent value="sell">
                    <div className="flex flex-col items-center gap-14 mt-16 p-16">

                        <div className="w-full">
                            <video className="w-full h-full object-cover rounded-xl" autoPlay loop muted>
                                <source src="accident.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        <div className="w-full">
                            <video className="w-full h-full object-cover rounded-xl" autoPlay loop muted>
                                <source src="Drowsiness.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        <div className="h-[70vh] w-[90%]">
                            <video className="w-full h-full object-cover rounded-xl" autoPlay loop muted>
                                <source src="Vehicle.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </TabsContent>

            </Tabs>

        </>
    );
}
