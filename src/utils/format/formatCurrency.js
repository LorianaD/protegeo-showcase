function formatCurrency(value) {
    const amount = Number(value ?? 0);
    const hasDecimals = amount % 1 !== 0;

    return `${amount.toLocaleString("fr-FR", {
        minimumFractionDigits: hasDecimals ? 2 : 0,
        maximumFractionDigits: 2,
    })} €`;
}

export {
    formatCurrency,
};