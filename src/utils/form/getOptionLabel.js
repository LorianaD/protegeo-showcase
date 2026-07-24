function getOptionLabel(options = [], value) {
    const selectedOption = options.find(
        (option) => option.value === value
    );

    return selectedOption?.label ?? value;
}

export {
    getOptionLabel,
}