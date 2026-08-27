function formatCurrency(value) {
    return `${Number(value ?? 0).toLocaleString("fr-FR")} €`;
}

export {
    formatCurrency,
};