import { HeroHome, CardsRedirectionsHome, CafPaymentHome } from "../components/pages/home";
import Main from "../components/layout/Main.jsx";

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