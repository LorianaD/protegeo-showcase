function formatPhoneNumber(phoneNumber) {
    if (!phoneNumber) {
        return "Non renseigné";
    }

    const digits = phoneNumber.replace(/\s/g, "");

    if (digits.length !== 10) {
        return phoneNumber;
    }

    return digits.match(/.{1,2}/g).join(" ");
}

function santizePhoneNumber(phoneNumber) {
    if (!phoneNumber) {
        return "";
    }

    return phoneNumber.replace(/\D/g, "");
}

export {
    formatPhoneNumber,
    santizePhoneNumber,
}