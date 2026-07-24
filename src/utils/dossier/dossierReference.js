const dossierReferences = {
    "19-A-00481": 1,
    "19-A-00491": 2,
    "19-A-00501": 3,
    "19-A-00502": 4,
    "19-A-00480": 5,
};

function getDossierIdByReference(reference) {
    return dossierReferences[reference] || null;
}

export {
    getDossierIdByReference,
};