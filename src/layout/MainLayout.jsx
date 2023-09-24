import { Outlet } from "react-router-dom";
import Navbar from "../components/header/navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="mx-3 md:mx-20 ">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;