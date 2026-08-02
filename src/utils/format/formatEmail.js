function formatEmail(email) {
    if (!email) {
        return "Non renseigné";
    }

    return email.trim().toLowerCase();
}

function sanitizeEmail(email) {
    if (!email) {
        return "";
    }

    return email.trim().toLowerCase();
}

export {
    formatEmail,
    sanitizeEmail,
}