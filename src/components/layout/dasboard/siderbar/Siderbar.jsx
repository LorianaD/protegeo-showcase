import SiderbarSelect from "./SidebarSelect";
import SiderbarFooter from "./SiderbarFooter";
import SiderbarHeader from "./SiderbarHeader";
import SiderbarNav from "./SiderbarNav";

function Siderbar({ onAddDossier, protectedPersons, protectedPersonsLoading, protectedPersonsError }) {
    return (
        <div className="siderbar">
            <div className="siderbar-top">
                <SiderbarHeader/>
                <SiderbarSelect protectedPersons={protectedPersons} loading={protectedPersonsLoading} error={protectedPersonsError}/>
                <SiderbarNav onAddDossier={onAddDossier} protectedPersons={protectedPersons}/>                
            </div>
            <SiderbarFooter/>
        </div>
    )
}

export default Siderbar;