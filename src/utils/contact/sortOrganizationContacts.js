const organizationContactTypeOrder = [
    "caf",
    "cpam",
    "mdph",
    "tax_office",
    "bank",
    "other_organization",
];

/**
 * Sorts organization contacts according to their business category.
 */
function sortOrganizationContacts(contacts) {
    return [...contacts].sort((firstContact, secondContact) => {
        const firstPosition = organizationContactTypeOrder.indexOf(
            firstContact.contact_type
        );

        const secondPosition = organizationContactTypeOrder.indexOf(
            secondContact.contact_type
        );

        const defaultPosition = organizationContactTypeOrder.length;

        const firstOrder = firstPosition === -1
            ? defaultPosition
            : firstPosition;

        const secondOrder = secondPosition === -1
            ? defaultPosition
            : secondPosition;

        return firstOrder - secondOrder;
    });
}

export {
    sortOrganizationContacts,
};