import { HeroHome, CardsRedirectionsHome, CafPaymentHome } from "../../components";
import { Main } from "../../components";

function Home() {
    return(
        <Main>
            <HeroHome/>
            <CardsRedirectionsHome/>
            <CafPaymentHome/>
        </Main>
    )
}

export default Home