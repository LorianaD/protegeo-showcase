import { defaultMan, defaultWoman } from "@/assets";

function getProtectedPersonPhoto(photoUrl, civility) {
    if (photoUrl) {
        return photoUrl;
    }

    const defaultImg = civility === "Madame" ? defaultWoman : defaultMan;

    return defaultImg;
}

export {
    getProtectedPersonPhoto,
}