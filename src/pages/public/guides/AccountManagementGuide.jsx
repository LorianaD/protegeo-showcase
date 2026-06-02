import { ExplanationsAccountManagementGuide, FinalWarningAccountManagement, FooterAccountManagementGuide, HeroAccountManagementGuide, Main, StepsAccountManagementGuide, WarningAccountManagement } from "@/components";

function AccountManagementGuide() {
    return (
        <Main>
            <HeroAccountManagementGuide/>
            <WarningAccountManagement/>
            <StepsAccountManagementGuide/>
            <ExplanationsAccountManagementGuide/>
            <FooterAccountManagementGuide/>
            <FinalWarningAccountManagement/>
        </Main>
    )
}

export default AccountManagementGuide;