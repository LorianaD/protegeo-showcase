import SiderbarSelect from "./SidebarSelect";
import SiderbarFooter from "./SiderbarFooter";
import SiderbarHeader from "./SiderbarHeader";
import SiderbarNav from "./SiderbarNav";

function Siderbar({ onAddDossier, refreshKey }) {
    return (
        <div className="siderbar">
            <div className="siderbar-top">
                <SiderbarHeader/>
                <SiderbarSelect refreshKey={refreshKey}/>
                <SiderbarNav onAddDossier={onAddDossier}/>                
            </div>
            <SiderbarFooter/>
        </div>
    )
}

export default Siderbar;