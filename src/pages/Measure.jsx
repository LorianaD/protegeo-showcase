import Main from "../components/layout/Main";
import { HeroMeasure, MeasureTypeMeasure } from "../components/pages/measure";
import { InBuild } from "../components/ui";

function Measure() {
    return(
        <Main>
            <HeroMeasure/>
            <MeasureTypeMeasure/>
            <InBuild />
        </Main>
    )
}

export default Measure;