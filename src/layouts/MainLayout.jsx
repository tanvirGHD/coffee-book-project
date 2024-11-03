import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <Toaster></Toaster>
            {/* Navbar */}
            <div className="h-16">
            <Navbar></Navbar>
            </div>

            <div className="min-h-[calc(100vh-288px)] py-10">{/* Dynamic Section */}
            <Outlet></Outlet>
            </div>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;