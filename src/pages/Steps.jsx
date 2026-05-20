import Main from "../components/layout/Main";
import { CardsRedirectionsSteps, HeroSteps, StepsSteps } from "../components/pages/steps";
import InBuild from "../components/ui/messages/InBuild";

function Steps() {
    return (
        <Main>
            <HeroSteps/>
            <StepsSteps/>
            <CardsRedirectionsSteps/>
        </Main>
    )
}

export default Steps