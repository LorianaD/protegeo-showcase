import Main from "../components/layout/Main";
import { HeroMeasure } from "../components/pages/measure";
import { InBuild } from "../components/ui";

function Measure() {
    return(
        <Main>
            <HeroMeasure/>
            <InBuild title={"Comprendre les mesures de protection juridique"} />
        </Main>
    )
}

export default Measure;