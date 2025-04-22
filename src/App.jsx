import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Owners from "./pages/Owners";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProfileForm from "./components/ProfileForm";
import Profile from "./pages/Profile";
import Rewards from "./pages/Rewards";
import ReportIssue from "./components/ReportIssue";

export default function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/PlanIT/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/owners" element={<Owners />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/profileform" element={<ProfileForm />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/rewards" element={<Rewards />} />
                </Routes>
                <ReportIssue />
            </Layout>
        </Router>
    );
}