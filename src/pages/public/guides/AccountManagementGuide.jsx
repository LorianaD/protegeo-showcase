import { ExplanationsAccountManagementGuide, FooterAccountManagementGuide, HeroAccountManagementGuide, Main, StepsAccountManagementGuide, WarningAccountManagement } from "@/components";

function AccountManagementGuide() {
    return (
        <Main>
            <HeroAccountManagementGuide/>
            <WarningAccountManagement/>
            <StepsAccountManagementGuide/>
            <ExplanationsAccountManagementGuide/>
            <FooterAccountManagementGuide/>
        </Main>
    )
}

export default AccountManagementGuide;