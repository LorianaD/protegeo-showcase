function createFormData(fieldList, data = {}) {
    const formData = {};

    fieldList.forEach((fieldName) => {
        formData[fieldName] = data[fieldName] ?? "";
    });

    return formData;
}

export {
    createFormData,
}