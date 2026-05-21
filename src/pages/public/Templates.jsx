import { CardsRedirectionsTemplates, Main } from "../../components";
import { BanksTemplates, CafTemplates, CpamTemplates, HeroTemplates, MdphTemplates, OtherTemplates, TaxesTemplates } from "../../components";

function Templates() {
    return (
        <Main>
            <HeroTemplates/>
            <CafTemplates/>
            <MdphTemplates/>
            <CpamTemplates/>
            <TaxesTemplates/>
            <BanksTemplates/>
            <OtherTemplates/>
            <CardsRedirectionsTemplates/>
        </Main>
    )
}

export default Templates;