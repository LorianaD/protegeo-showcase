function validateRegisterForm(formData, actualStep) {
    const errors = {};

    if (actualStep === 1) {
        if (!formData.email) {
            errors.email = "L’e-mail est obligatoire.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = "Le format de l’e-mail est invalide.";
        }

        if (!formData.password) {
            errors.password = "Le mot de passe est obligatoire.";
        } else if (formData.password.length < 12) {
            errors.password = "Le mot de passe doit contenir au moins 12 caractères.";
        } else if (!/[0-9]/.test(formData.password)) {
            errors.password = "Le mot de passe doit contenir au moins 1 chiffre.";
        } else if (!/[^A-Za-z0-9]/.test(formData.password)) {
            errors.password = "Le mot de passe doit contenir au moins 1 caractère spécial.";
        }
    }

    if (actualStep === 2) {
        if (!formData.civility) errors.civility = "La civilité est obligatoire.";
        if (!formData.lastname) errors.lastname = "Le nom est obligatoire.";
        if (!formData.firstname) errors.firstname = "Le prénom est obligatoire.";
    }

    if (actualStep === 3) {
        if (!formData.address) errors.address = "L’adresse est obligatoire.";
        if (!formData.postalCode) {
            errors.postalCode = "Le code postal est obligatoire.";
        } else if (!/^[0-9]{5}$/.test(formData.postalCode)) {
            errors.postalCode = "Le code postal doit contenir 5 chiffres.";
        }

        if (!formData.city) errors.city = "La ville est obligatoire.";
    }

    return errors;    
}

export {
    validateRegisterForm,
}