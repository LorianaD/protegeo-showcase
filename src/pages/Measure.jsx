import Main from "../components/layout/Main";
import HeroMeasure from "../components/pages/measure/HeroMeasure";
import InBuild from "../components/ui/messages/InBuild";

function Measure() {
    return(
        <Main>
            <HeroMeasure/>
            <InBuild title={"Comprendre les mesures de protection juridique"} />
        </Main>
    )
}

export default Measure;