import { Preview } from "@/components/ui";
import { maquetteDashboard } from "@/assets";

function LoginPreview() {
    return (
        <Preview 
            badge="Espace connecté bientôt disponible"
            title="Connexion à Protégéo"
            description="
                Le futur tableau de bord Protégéo permettra
                de suivre les ressources, les dépenses,
                les justificatifs et la préparation du compte
                de gestion annuel.
            "
            img={maquetteDashboard}
            imgAlt="Aperçu du futur tableau de bord Protégéo"
        />
    );
}

export default LoginPreview;