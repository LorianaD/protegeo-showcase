import Main from "../components/layout/Main";
import { HeroMeasure, MeasureTypeMeasure, RoleMeasure, ProtectedPersonneRightsMeasure } from "../components/pages/measure";
import CardsRedirectionsMeasure from "../components/pages/measure/CardsRedirectionsMeasure";
import { InBuild } from "../components/ui";

function Measure() {
    return(
        <Main>
            <HeroMeasure/>
            <MeasureTypeMeasure/>
            <RoleMeasure/>
            <ProtectedPersonneRightsMeasure/>
            <CardsRedirectionsMeasure/>
        </Main>
    )
}

export default Measure;
