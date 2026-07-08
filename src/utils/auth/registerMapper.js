function mapRegisterFormToApi(formData) {
    return {
        email: formData.email,
        password: formData.password,
        civility: formData.civility,
        lastname: formData.lastname,
        firstname: formData.firstname,
        address: formData.address,
        postal_code: formData.postalCode,
        city: formData.city,
    };
}

export {
    mapRegisterFormToApi,
}