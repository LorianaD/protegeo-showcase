import SiderbarSelect from "./SidebarSelect";
import SiderbarFooter from "./SiderbarFooter";
import SiderbarHeader from "./SiderbarHeader";
import SiderbarNav from "./SiderbarNav";

function Siderbar() {
    return (
        <div className="siderbar">
            <div className="siderbar-top">
                <SiderbarHeader/>
                <SiderbarSelect/>
                <SiderbarNav/>                
            </div>
            <SiderbarFooter/>
        </div>
    )
}

export default Siderbar;