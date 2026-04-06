import CafPayment from "../components/home/CafPayment.jsx";
import CardsRedirections from "../components/home/CardsRedirections.jsx";
import Hero from "../components/home/Hero.jsx";
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