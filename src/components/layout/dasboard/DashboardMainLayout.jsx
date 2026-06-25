import { Outlet } from "react-router";
import { Siderbar } from "./siderbar";
import Footer from "../Footer";

function DashboardMainLayout() {
    return (
        <div>
            <div className="dashboard-main-layout">
                <Siderbar/>
                <Outlet/>
            </div>
            <Footer/>            
        </div>
    )
}

export default DashboardMainLayout;