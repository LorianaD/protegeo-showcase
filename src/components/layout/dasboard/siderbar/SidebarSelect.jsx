import { ProtectedPersonSelect } from "@/components/pages";

function SiderbarSelect({ protectedPersons, loading, error, }) {
    return (
        <div className="siderbar-select">
            <ProtectedPersonSelect
                protectedPersons={protectedPersons}
                loading={loading}
                error={error}
                variant="siderbar"
            />            
        </div>

    )
}

export default SiderbarSelect;