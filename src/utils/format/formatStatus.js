function formatManagementAccountStatus(status) {
    const statuses = {
        in_progress: "En cours",
        to_validate: "À valider",
        validated: "Validé",
        sent: "Envoyé",
    };

    return statuses[status] ?? status;
}

export {
    formatManagementAccountStatus,
};