import Main from "../components/layout/Main";
import { BanksTemplates, CafTemplates, CpamTemplates, HeroTemplates, MdphTemplates, OtherTemplates, TaxesTemplates } from "../components/pages/templates";

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