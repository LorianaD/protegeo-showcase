function formatDate(date) {
    if (!date) {
        return "Non renseigné"
    }

    return new Date(date).toLocaleDateString("fr-FR");
}

export {
    formatDate,
}