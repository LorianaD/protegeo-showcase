import Main from "../components/layout/Main";
import { AccessHelps, CardsRedirectionsHelps, CpamHelps, FinancialHelps, HeroHelps, MdphHelps, TaxesHelps, TransportHelps } from "../components/pages/helps";
import InBuild from "../components/ui/messages/InBuild";

function Helps() {
    return(
        <Main>
            <HeroHelps/>
            <FinancialHelps/>
            <MdphHelps/>
            <CpamHelps/>
            <TaxesHelps/>
            <AccessHelps/>
            <TransportHelps/>
            <CardsRedirectionsHelps/>
        </Main>
    )
}

export default Helps