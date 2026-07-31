const options = {

    civility: [
        {
            value: "madam",
            label: "Madame"
        },
        {
            value: "sir",
            label: "Monsieur"
        },
    ],

    gender: [
        {
            value: "feminine",
            label: "Féminin"
        },
        {
            value: "male",
            label: "Masculin"
        },
        
    ],

    family_situation: [
        {
            value: "single",
            label: "Célibataire"
        },
        {
            value: "cohabiting_couple",
            label: "En concubinage"
        },
        {
            value: "civil_partnership",
            label: "Pacsé(e)"
        },
        {
            value: "married",
            label: "Marié(e)"
        },
        {
            value: "separated",
            label: "Séparé(e)"
        },
        {
            value: "divorced",
            label: "Divorcé(e)"
        },
        {
            value: "widower",
            label: "Veuf(ve)"
        },
    ],

    measureType: [
        {
            value: "safeguard_of_justice",
            label: "Sauvegarde de justice",
        },
        {
            value: "simple_curatorship",
            label: "Curatelle simple"
        },
        {
            value: "reinforced_curatorship",
            label: "Curatelle renforcée",
        },
        {
            value: "adapted_curatorship",
            label: "Curatelle aménagée"
        },
        {
            value: "guardianship",
            label: "Tutelle"
        },
        {
            value: "family_authorization",
            label: "Habilitation familiale"
        },
        {
            value: "future_protection_mandate",
            label: "Mandat de protection future"
        },
    ],

    roleType: [
        {
            value: "curator_person_and_property",
            label: "Curateur / Curatrice aux biens et la personne"
        },
        {
            value: "curator_property",
            label: "Curateur / Curatrice aux biens"
        },
        {
            value: "curator_person",
            label: "Curateur / Curatrice à la personne"
        },
        {
            value: "guardian",
            label: "Tuteur / Tutrice"
        },
        {
            value: "deputy_curator",
            label: "Subrogé curateur / Subrogée curatrice"
        },
        {
            value: "deputy_guardian",
            label: "Subrogé tuteur / Subrogée tutrice"
        },
    ],

    contact_category: [
        {
            value: "family",
            label: "Famille"
        },
        {
            value: "professional",
            label: "Référents"
        },
        {
            value: "organization",
            label: "Organisme"
        },
    ],

    contact_type_family: [
        {
            label: "Vauillez sélectionner le type de relation",
        },
        {
            value: "father",
            label: "Pére"
        },
        {
            value: "mother",
            label: "Mére"
        },
        {
            value: "sibling",
            label: "Frére et soeur"
        },
        {
            value: "child",
            label: "Enfants"
        },
        {
            value: "trusted_person",
            label: "Personnes de cofiance"
        },
        {
            value: "spouse",
            label: "Partenaire"
        }
    ],

    contact_type_professional: [
        {
            value: "doctor",
            label: "Médecin traitant"
        },
        {
            value: "social_worker",
            label: "Travailleur social / accompagnement"
        },
        {
            value: "professional_guardian",
            label: "Curateur ou tuteur professionnel (si co-gestion)"
        },
        {
            value: "lawyer",
            label: "Avocat"
        },
        {
            value: "notary",
            label: "Notaire"
        }
    ],

    contact_type_organization: [
        {
            value: "caf",
            label: "CAF"
        },
        {
            value: "cpam",
            label: "CPAM"
        },
        {
            value: "mdph",
            label: "MDPH"
        },
        {
            value: "bank",
            label: "Banque"
        },
        {
            value: "tax_office",
            label: "Service des impôts"
        },
    ],

};

export { options };