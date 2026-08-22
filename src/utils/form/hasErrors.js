function hasErrors(errors) {
    for (const key in errors) {
        return true;
    }

    return false;
}

export {
    hasErrors,
};