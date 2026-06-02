import { CardsRedirectionsDiscover, ExistenceDiscover, FonctionDiscover, HeroDiscover, Main, ProtegeoDiscover, ServesDiscover, WhoDiscover } from "@/components";

function Discover() {
    return (
        <Main>
            <HeroDiscover/>
            <ProtegeoDiscover/>
            <ServesDiscover/>
            <WhoDiscover/>
            <FonctionDiscover/>
            <ExistenceDiscover/>
            <CardsRedirectionsDiscover/>
        </Main>
    )
}

export default Discover;