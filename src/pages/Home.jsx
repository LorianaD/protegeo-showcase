import CafPayment from "../components/pages/home/CafPayment.jsx";
import CardsRedirections from "../components/pages/home/CardsRedirections.jsx";
import Hero from "../components/pages/home/Hero.jsx";
import Main from "../components/layout/Main.jsx";

function Home() {
    return(
        <Main>
            <Hero/>
            <CardsRedirections/>
            <CafPayment/>
        </Main>
    )
}

export default Home