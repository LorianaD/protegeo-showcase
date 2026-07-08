function validateLoginForm(values) {
    const errors = {};
    let isValid = true;

    if (!values.email.trim()) {
        errors.email = "L’identifiant est obligatoire.";
        isValid = false;
    }

    if (!values.password.trim()) {
        errors.password = "Le mot de passe est obligatoire.";
        isValid = false;
    }

    return {
        errors,
        isValid,
    };
}

export {
    validateLoginForm,
}