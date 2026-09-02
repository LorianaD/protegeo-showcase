function formatDate(date) {
    if (!date) {
        return "Non renseigné"
    }

    return new Date(date).toLocaleDateString("fr-FR");
}

function formatLongDate(date) {
    if (!date) {
        return "";
    }

    return new Intl.DateTimeFormat("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(date));
}

export {
    formatDate,
    formatLongDate,
}