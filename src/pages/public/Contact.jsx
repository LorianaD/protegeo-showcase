import { Main, InBuild } from "../../components";
import { CardsRedirectionsContacts, EssentialsContacts, HeroContacts, LocalTransportHelpContacts, MdphContacts, OnlineToolsContacts } from "../../components";

function Contact() {
    return (
        <Main>
            <HeroContacts/>
            <EssentialsContacts/>
            <MdphContacts/>
            <OnlineToolsContacts/>
            <LocalTransportHelpContacts/>
            <CardsRedirectionsContacts/>
        </Main>
    )
}

export default Contact;