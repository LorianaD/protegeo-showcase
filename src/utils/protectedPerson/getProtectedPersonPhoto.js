import { defaultMan, defaultWoman } from "@/assets";

function getDefaultProtectedPersonPhoto(civility) {
    return civility === "madam"
        ? defaultWoman
        : defaultMan;
}

export {
    getDefaultProtectedPersonPhoto,
};