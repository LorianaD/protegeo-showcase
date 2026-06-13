const loginHeader = {
    title : "Connexion à Protégéo",
};

const loginForm = {
    title : "Se connecter à son compte",
    loginFormFields : [
        {
            name : "username",
            type : "text",
            label : "Identifiant",
            description : "Format attendu : nom@domaine.fr",
            placeholder : "",
        },
        {
            name : "password",
            type : "password",
            label : "Mot de passe",
            description : "",
            placeholder : "",
            link_label : "Mot de passe oublié ?",
            link_url : "",
        },
    ],
    btn_label : "Se connecter",
    btn_url : "",
};

const loginRegisterRedirection = {
    title : "Vous n’avez pas de compte ?",
    btn_label : "Créer un compte",
    btn_url : "/auth/register",
};

export {
    loginHeader,
    loginForm,
    loginRegisterRedirection,
};