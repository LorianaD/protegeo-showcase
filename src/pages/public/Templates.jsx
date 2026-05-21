import { Main } from "../../components";
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
        </Main>
    )
}

export default Templates;