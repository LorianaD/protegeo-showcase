import { Main, InBuild } from "../../components";
import { AccessHelps, CardsRedirectionsHelps, CpamHelps, FinancialHelps, HeroHelps, MdphHelps, TaxesHelps, TransportHelps } from "../../components";

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