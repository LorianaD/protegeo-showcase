import { Main, InBuild } from "../../components";
import { HeroMeasure, MeasureTypeMeasure, RoleMeasure, ProtectedPersonneRightsMeasure, CardsRedirectionsMeasure } from "../../components";

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
