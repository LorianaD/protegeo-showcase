import { iconWarning } from "@/assets";

const contactUsHero = {
    title: "Nous contacter",
    description:
        "Une question, une remarque ou une suggestion sur Protégéo ? Ce formulaire permet de me transmettre un message concernant le projet, son contenu ou son amélioration.",
    warning: {
        icon: iconWarning,
        title: "À savoir : ",
        description: "Protégéo est un projet réalisé par une développeuse web. Ce site n’est pas une entreprise, une association, ni un service administratif officiel.",
        important: "Pour une démarche urgente ou officielle, contactez directement les organismes compétents.",
    },
};

const contactUsReasons = {
    title: "Pourquoi me contacter ?",
    cards: [
        {
            title: "Une remarque sur le site",
            description: "Signaler une erreur, un lien cassé ou une information à améliorer.",
        },
        {
            title: "Une suggestion d’amélioration",
            description: "Proposer une fonctionnalité, une page ou un contenu utile.",
        },
        {
            title: "Une question sur le projet",
            description: "Demander des précisions sur le fonctionnement ou l’objectif de Protégéo.",
        },
    ],
};

const contactUsForm = {
    title: "Envoyer un message",
    fields: [
        {
            id: "name",
            label: "Nom",
            type: "text",
            placeholder: "Votre nom",
            required: true,
        },
        {
            id: "firstname",
            label: "Prénom",
            type: "text",
            placeholder: "Votre prénom",
            required: true,
        },
        {
            id: "email",
            label: "Adresse e-mail",
            type: "email",
            placeholder: "nom@domaine.fr",
            required: true,
        },
        {
            id: "message",
            label: "Message",
            type: "textarea",
            placeholder: "Écrivez votre message...",
            required: true,
        },
    ],
    submitLabel: "Envoyer",
    note: "Les messages sont lus dans la mesure du possible.",
};

const contactUsImportant = {
    icon: iconWarning,
    description: [
        "Protégéo ne remplace pas un tribunal, un avocat, la CAF, la CPAM, la MDPH ou les impôts.",
        "Les informations proposées servent uniquement à mieux comprendre et organiser les démarches."
    ],
};

export { 
    contactUsHero, 
    contactUsReasons,
    contactUsForm,
    contactUsImportant
};