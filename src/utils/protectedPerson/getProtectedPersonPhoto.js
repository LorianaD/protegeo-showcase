import { defaultMan, defaultWoman } from "@/assets";

function getProtectedPersonPhoto(photoUrl, civility) {
    if (photoUrl) {
        return photoUrl;
    }

    const defaultImg = civility === "madam" ? defaultWoman : defaultMan;

    return defaultImg;
}

export {
    getProtectedPersonPhoto,
}