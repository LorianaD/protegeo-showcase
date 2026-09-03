import { cta, fields } from "@/data/form";

const login = {

    header : {
        title : "Connexion à Protégéo",
    },

    form : {
        title : "Se connecter à son compte",
        fields: [
            fields.email,
            {
                ...fields.password,
                link_label: "Mot de passe oublié ?",
                link_url: "",
            },
        ],
        btn_label : cta.confirm,
        error : "Identifiant ou Mot de passe invalide."
    },

    registerRedirection : {
        title : "Vous n’avez pas de compte ?",
        btn_label : "Créer un compte",
        btn_url : "/auth/register",
    },
}

export {
    login,
};