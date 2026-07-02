import { HeroDashboard, Main } from "@/components";
import { financialManagementDashboard } from "@/data";

function FinancialManagement() {
    const page = financialManagementDashboard;
    const variantClass = "dashboard";
    return (
        <Main variant={ variantClass }>
            <HeroDashboard page={ page } />
        </Main>
    )
}

export default FinancialManagement;