import { Outlet } from "react-router-dom";
import Navbar from "../components/header/navbar/Navbar";
import Donation from "../pages/donation/Donation";


const MainLayout = () => {
    return (
        <div className="mx-3 md:mx-20 ">
            <Navbar></Navbar>
            <Outlet context={Donation}></Outlet>
        </div>
    );
};

export default MainLayout;