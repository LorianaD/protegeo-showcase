const COOKIE_CONSENT_KEY = "protegeo_cookie_consent";

const DEFAULT_COOKIE_CONSENT = {
    necessary: true,
    preferences: false,
    analytics: false,
};

function getCookieConsent() {
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);

    if (!storedConsent) {
        return null;
    }

    try {
        return JSON.parse(storedConsent);
    } catch {
        return null;
    }
}

function saveCookieConsent(consent) {
    const cookieConsent = {
        ...DEFAULT_COOKIE_CONSENT,
        ...consent,
        necessary: true,
    };

    localStorage.setItem(
        COOKIE_CONSENT_KEY,
        JSON.stringify(cookieConsent)
    );

    return cookieConsent;
}

function acceptAllCookies() {
    return saveCookieConsent({
        preferences: true,
        analytics: true,
    });
}

function refuseOptionalCookies() {
    return saveCookieConsent({
        preferences: false,
        analytics: false,
    });
}

function hasCookieConsentChoice() {
    return getCookieConsent() !== null;
}

function hasAnalyticsConsent() {
    return getCookieConsent()?.analytics === true;
}

export {
    DEFAULT_COOKIE_CONSENT,
    acceptAllCookies,
    getCookieConsent,
    hasAnalyticsConsent,
    hasCookieConsentChoice,
    refuseOptionalCookies,
    saveCookieConsent,
};