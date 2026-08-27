import { ProtectedPersonSelect } from "@/components/pages";

function SiderbarSelect({ refreshKey }) {
    return (
        <div className="siderbar-select">
            <ProtectedPersonSelect
                variant="siderbar"
                refreshKey={refreshKey}
            />            
        </div>

    )
}

export default SiderbarSelect;