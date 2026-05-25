import Preview from "../../../ui/messages/Preview";
import { maquetteCommunity } from "@/assets";

function PreviewCommunity() {
    return (
        <Preview
            badge="Communauté bientôt disponible"
            title="Un espace d’échange autour de la protection juridique"
            description="
                Le futur espace communauté Protégéo permettra
                de partager des conseils, poser des questions
                générales et retrouver des repères utiles.
            "
            img={maquetteCommunity}
            imgAlt="Aperçu du futur espace communauté Protégéo"
        />
    );
}

export default PreviewCommunity;