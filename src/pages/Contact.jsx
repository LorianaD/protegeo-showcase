import Main from "../components/layout/Main";
import { CardsRedirectionsContacts, EssentialsContacts, HeroContacts, LocalTransportHelpContacts, MdphContacts, OnlineToolsContacts } from "../components/pages/contacts";
import InBuild from "../components/ui/messages/InBuild";

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