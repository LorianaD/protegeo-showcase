const protectedColumns = [
    {
        name: "fullname",
        label: "Prénom Nom",
    },
    {
        name: "measure",
        label: "Mesure",
    },
    {
        key: "measure_tracking",
        label: "Suivi de la mesure",
        type: "badge",
        variantKey: "measure_tracking_variant",
    },
    {
        name: "status",
        label: "Statut",
        type: "badge",
        variantName: "status_variant",
    },
];

export {
    protectedColumns,
};