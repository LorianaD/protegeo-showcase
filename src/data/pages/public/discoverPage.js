import { iconAccount, iconClipboard, iconCurator, iconExpense, iconFamilly, iconFolder, iconHandshake, iconOrganize, screenshotAddMajor, screenshotAnnualAccount, screenshotDashboard, screenshotHome, screenshotRegister } from "@/assets";

const discoverHero = {
    title: "Découvrir Protégéo",
    description: "Une plateforme conçue pour expliquer, organiser et accompagner la gestion des mesures de protection juridique.",
};

const discoverProtegeo = {
    title: "C’est quoi Protégéo ?",
    description: [
        "Protégéo est un projet pensé pour aider les familles, proches aidants et personnes accompagnant une mesure de protection juridique.",
        "L’objectif est de rendre les démarches plus compréhensibles, plus organisées et moins stressantes au quotidien."
    ],
    screenshot: screenshotHome,
};

const discoverServes = {
    title: "À quoi sert Protégéo ?",
    cards: [
        {
            icon: iconFolder,
            title: "Organiser les documents",
            description: "Préparer les documents utiles pour les démarches administratives.",
        },
        {
            icon: iconExpense,
            title: "Suivre les dépenses",
            description: "Visualiser les ressources et dépenses importantes du quotidien.",
        },
        {
            icon: iconAccount,
            title: "Préparer le compte de gestion",
            description: "Faciliter le suivi annuel avant la transmission au tribunal.",
        },
        {
            icon: iconClipboard,
            title: "Comprendre les démarches",
            description: "Expliquer les étapes et obligations liées aux mesures de protection.",
        },
        {
            icon: iconFamilly,
            title: "Accompagner les familles",
            description: "Aider les proches dans l’organisation et le suivi administratif.",
        },
        {
            icon: iconOrganize,
            title: "Centraliser les informations",
            description: "Retrouver les données essentielles dans un même espace.",
        },
    ],
};

const discoverWho = {
    title: "Pour qui ?",
    cards: [
        {
            icon: iconFamilly,
            title: "Famille & proches",
            description: "Pour mieux comprendre les démarches et suivre l’organisation quotidienne.",
        },
        {
            icon: iconCurator,
            title: "Tuteurs et curateurs familiaux",
            description: "Pour centraliser les ressources, justificatifs et informations importantes.",
        },
        {
            icon: iconHandshake,
            title: "Personnes en recherche d’informations",
            description: "Pour découvrir les mesures de protection et accéder à des ressources utiles.",
        },
    ],
};

const discoverFonction = {
    title: "Comment fonctionne Protégéo ?",
    steps: [
        {
            title: "Etape 1 : Créer un compte",
            description: "Créer un compte, en remplissent le formulaire.",
            screenshot: screenshotRegister,
        },
        {
            title: "Etape 2 : Accéder au tableau de bord",
            description: "Accéder à votre espace.",
            screenshot: screenshotDashboard,
        },
        {
            title: "Etape 3 : Ajouter les informations",
            description: "Ajouter les informations concernant la personne protégée.",
            screenshot: screenshotAddMajor,
            format: "portrait",
        },
        {
            title: "Etape 4 : Préparer le compte de gestion",
            description: "Préparer votre compte annuel.",
            screenshot: screenshotAnnualAccount,
        },
    ],
};

const discoverExistence = {
    title: "Pourquoi ce projet existe",
    description: [
        "En accompagnant une personne sous curatelle, j’ai constaté que les démarches administratives peuvent rapidement devenir complexes et difficiles à comprendre.",
        "Les informations sont souvent dispersées entre plusieurs organismes et les ressources utiles ne sont pas toujours faciles à retrouver.",
        "Protégéo est né avec la volonté d’aider les familles, proches aidants et curateurs à mieux s’organiser, comprendre les démarches et accompagner leur proche au quotidien.",
    ],
};

export {
    discoverHero,
    discoverProtegeo,
    discoverServes,
    discoverWho,
    discoverFonction,
    discoverExistence,
};