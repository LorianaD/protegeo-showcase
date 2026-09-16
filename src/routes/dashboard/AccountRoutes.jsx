import { BankAccountDashboardAccount, ExpensesDashboardAccount, ResourcesDashboardAccount, SummaryDashboardAccount } from "@/components";
import { Account } from "@/pages/dashboard";
import { Route, Routes } from "react-router";

function AccountRoutes() {
    return (
        <Routes>
            <Route element={<Account />}>
                <Route index element={<SummaryDashboardAccount />} />
                <Route path="/resources" element={<ResourcesDashboardAccount />} />
                <Route path="/expenses" element={<ExpensesDashboardAccount />} />
                <Route path="/bank-accounts" element={<BankAccountDashboardAccount />} />
            </Route>
        </Routes>
    )    
}

export default AccountRoutes;