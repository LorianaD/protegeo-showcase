function validateRequiredFields(fields, formData, errors = {}) {
    fields.forEach((field) => {
        if (
            field.required !== false &&
            !formData[field.name]
        ) {
            errors[field.name] = "Ce champ est obligatoire.";
        }
    });

    return errors;
}

export {
    validateRequiredFields,
};