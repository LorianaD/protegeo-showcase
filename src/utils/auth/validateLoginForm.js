function validateLoginForm(values) {
    const errors = {};

    if (!values.email.trim()) {
        errors.email = "L’identifiant est obligatoire.";
    }

    if (!values.password.trim()) {
        errors.password = "Le mot de passe est obligatoire.";
    }

    return errors;
}

export {
    validateLoginForm,
}