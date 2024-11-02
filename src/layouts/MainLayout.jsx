import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>

            <div className="min-h-[calc(100vh-288px)]">{/* Dynamic Section */}</div>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;