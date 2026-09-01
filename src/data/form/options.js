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

    yes_no: [
        {
            value: "yes",
            label: "Oui",
        },
        {
            value: "no",
            label: "Non",
        },
    ],

    transaction_type: [
        {
            value: "resource",
            label: "Ressource",
        },
        {
            value: "expense",
            label: "Dépense",
        },
    ],

    category_group: [
        {
            value: "current_expenses",
            label: "Vie courante",
        },
        {
            value: "housing",
            label: "Logement",
        },
        {
            value: "insurance",
            label: "Assurances",
        },
        {
            value: "home_care",
            label: "Maintien à domicile",
        },
        {
            value: "taxes",
            label: "Impôts et taxes",
        },
        {
            value: "major_purchases",
            label: "Achats importants",
        },
        {
            value: "investments",
            label: "Placements",
        },
        {
            value: "repairs",
            label: "Travaux et réparations",
        },
        {
            value: "loans",
            label: "Emprunts",
        },
        {
            value: "other_expenses",
            label: "Autres dépenses",
        },
    ],

    transaction_resource_categories: [
        {
            value: "salary",
            label: "Salaire",
            group: "income",
        },
        {
            value: "retirement_pension",
            label: "Pension de retraite",
            group: "income",
        },
        {
            value: "disability_pension",
            label: "Pension d'invalidité",
            group: "income",
        },
        {
            value: "alimony",
            label: "Pension alimentaire",
            group: "income",
        },
        {
            value: "life_annuity",
            label: "Rente viagère",
            group: "income",
        },
        {
            value: "rental_income",
            label: "Revenus locatifs",
            group: "income",
        },
        {
            value: "disabled_adult_allowance",
            label: "Allocation aux adultes handicapés (AAH)",
            group: "allowances",
        },
        {
            value: "family_allowance",
            label: "Allocations familiales",
            group: "allowances",
        },
        {
            value: "housing_allowance",
            label: "Allocation logement",
            group: "allowances",
        },
        {
            value: "unemployment_allowance",
            label: "Allocation chômage",
            group: "allowances",
        },
        {
            value: "minimum_income",
            label: "Revenu minimum",
            group: "allowances",
        },
        {
            value: "interests_and_dividends",
            label: "Intérêts et dividendes",
            group: "investment_income",
        },
        {
            value: "real_estate_sale",
            label: "Vente d'un bien immobilier",
            group: "other_resources",
        },
        {
            value: "movable_property_sale",
            label: "Vente d'un bien mobilier",
            group: "other_resources",
        },
        {
            value: "healthcare_reimbursement",
            label: "Remboursement CPAM ou mutuelle",
            group: "other_resources",
        },
        {
            value: "other_resource",
            label: "Autre ressource",
            group: "other_resources",
        },
    ],

    transaction_expense_categories: [
        {
            value: "clothing",
            label: "Habillement",
            group: "current_expenses",
        },
        {
            value: "food",
            label: "Alimentation",
            group: "current_expenses",
        },
        {
            value: "leisure_and_holidays",
            label: "Loisirs et vacances",
            group: "current_expenses",
        },
        {
            value: "medical_expenses",
            label: "Frais médicaux",
            group: "current_expenses",
        },
        {
            value: "school_expenses",
            label: "Frais de scolarité",
            group: "current_expenses",
        },
        {
            value: "pocket_money",
            label: "Argent de poche",
            group: "current_expenses",
        },
        {
            value: "other_current_expense",
            label: "Autre dépense courante",
            group: "current_expenses",
        },

        {
            value: "rent",
            label: "Loyer",
            group: "housing",
        },
        {
            value: "accommodation_expenses",
            label: "Frais d'hébergement",
            group: "housing",
        },
        {
            value: "electricity",
            label: "Électricité",
            group: "housing",
        },
        {
            value: "gas",
            label: "Gaz",
            group: "housing",
        },
        {
            value: "water",
            label: "Eau",
            group: "housing",
        },
        {
            value: "telephone",
            label: "Téléphone / Internet",
            group: "housing",
        },

        {
            value: "home_insurance",
            label: "Assurance habitation",
            group: "insurance",
        },
        {
            value: "car_insurance",
            label: "Assurance automobile",
            group: "insurance",
        },
        {
            value: "health_insurance",
            label: "Assurance santé",
            group: "insurance",
        },
        {
            value: "other_insurance",
            label: "Autre assurance",
            group: "insurance",
        },

        {
            value: "housekeeping_help",
            label: "Aide ménagère",
            group: "home_care",
        },
        {
            value: "household_employee",
            label: "Employé(e) de maison",
            group: "home_care",
        },
        {
            value: "other_home_care",
            label: "Autre aide à domicile",
            group: "home_care",
        },

        {
            value: "income_tax",
            label: "Impôt sur le revenu",
            group: "taxes",
        },
        {
            value: "housing_tax",
            label: "Taxe d'habitation",
            group: "taxes",
        },
        {
            value: "property_tax",
            label: "Taxe foncière",
            group: "taxes",
        },
        {
            value: "tv_license",
            label: "Redevance télévision",
            group: "taxes",
        },

        {
            value: "real_estate_purchase",
            label: "Achat immobilier",
            group: "major_purchases",
        },
        {
            value: "vehicle_purchase",
            label: "Achat d'un véhicule",
            group: "major_purchases",
        },
        {
            value: "furniture_purchase",
            label: "Achat de mobilier",
            group: "major_purchases",
        },
        {
            value: "other_major_purchase",
            label: "Autre achat important",
            group: "major_purchases",
        },

        {
            value: "investment",
            label: "Placement",
            group: "investments",
        },

        {
            value: "property_renovation",
            label: "Travaux d'aménagement immobilier",
            group: "repairs",
        },
        {
            value: "maintenance_repair",
            label: "Réparation d'entretien",
            group: "repairs",
        },
        {
            value: "other_repair",
            label: "Autres travaux ou réparations",
            group: "repairs",
        },

        {
            value: "loan_repayment",
            label: "Remboursement d'emprunt",
            group: "loans",
        },

        {
            value: "private_manager_fees",
            label: "Émoluments du gérant privé",
            group: "other_expenses",
        },
        {
            value: "other_expense",
            label: "Autre dépense",
            group: "other_expenses",
        },
    ],

    payment_methods: [
        {
            value: "bank_card",
            label: "Carte bancaire",
        },
        {
            value: "check",
            label: "Chèque",
        },
        {
            value: "bank_transfer",
            label: "Virement bancaire",
        },
        {
            value: "direct_debit",
            label: "Prélèvement",
        },
        {
            value: "cash",
            label: "Espèces",
        },
        {
            value: "other",
            label: "Autre",
        },
    ],
};

export { options };