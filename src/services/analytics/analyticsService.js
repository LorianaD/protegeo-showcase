import { hasAnalyticsConsent } from "@/services/cookieConsent";

const GA_MEASUREMENT_ID = "G-8HG9MJ3BDV";
const GA_SCRIPT_ID = "google-analytics";

/**
 * Loads Google Analytics only when
 * analytics consent has been granted.
 */
function loadGoogleAnalytics() {
    window[`ga-disable-${GA_MEASUREMENT_ID}`] = false;

    // The script cannot be unloaded: when consent is granted again
    // in the same session, tracking is simply re-enabled.
    if (document.getElementById(GA_SCRIPT_ID)) {
        window.gtag("consent", "update", { analytics_storage: "granted" });
        return;
    }

    window.dataLayer = window.dataLayer || [];

    window.gtag = function () {
        window.dataLayer.push(arguments);
    };

    const script = document.createElement("script");

    script.id = GA_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

    document.head.appendChild(script);

    window.gtag("js", new Date());

    window.gtag("config", GA_MEASUREMENT_ID, {
        send_page_view: false,
    });
}

/**
 * Initializes analytics according to
 * the user's stored cookie consent.
 */
function initializeAnalytics() {
    if (!hasAnalyticsConsent()) {
        return;
    }

    loadGoogleAnalytics();
}

/**
 * Replaces sensitive route references before sending
 * the path to Google Analytics.
 */
function sanitizeAnalyticsPath(path) {
    return path
        .replace(
            /\/protected-profile\/[^/]+/,
            "/protected-profile/:reference"
        )
        .replace(
            /\/financial\/[^/]+/,
            "/financial/:reference"
        )
        .replace(
            /\/budget\/[^/]+/,
            "/budget/:reference"
        )
        .replace(
            /\/inventory\/[^/]+/,
            "/inventory/:reference"
        )
        .replace(
            /\/account\/[^/]+/,
            "/account/:reference"
        );
}

/**
 * Sends a page view to Google Analytics.
 */
function trackPageView(path) {
    if (!hasAnalyticsConsent() || !window.gtag) {
        return;
    }

    const sanitizedPath = sanitizeAnalyticsPath(path);

    window.gtag("event", "page_view", {
        page_path: sanitizedPath,
        page_location: `${window.location.origin}${sanitizedPath}`,
        page_referrer: "",
    });
}

/**
 * Returns the current hostname and each of its parent domains.
 * GA4 ("cookie_domain: auto") writes its cookies on the highest
 * possible domain, e.g. ".protegeo.fr" for "www.protegeo.fr".
 */
function getCookieDomainCandidates() {
    const hostnameParts = window.location.hostname.split(".");

    return hostnameParts.map((_, index) => (
        hostnameParts.slice(index).join(".")
    ));
}

/**
 * Removes Google Analytics cookies
 * when analytics consent is withdrawn.
 */
function removeGoogleAnalyticsCookies() {
    const analyticsCookieNames = document.cookie
        .split(";")
        .map((cookie) => cookie.trim().split("=")[0])
        .filter((cookieName) => (
            cookieName === "_ga"
            || cookieName.startsWith("_ga_")
        ));

    const expiredCookie = "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; Max-Age=0; path=/";

    analyticsCookieNames.forEach((cookieName) => {
        // Host-only cookie (e.g. localhost).
        document.cookie = `${cookieName}${expiredCookie}`;

        getCookieDomainCandidates().forEach((domain) => {
            document.cookie = `${cookieName}${expiredCookie}; domain=${domain}`;
        });
    });
}

/**
 * Disables Google Analytics tracking. The loaded script keeps running,
 * so it must also be told to stop writing cookies.
 */
function disableGoogleAnalytics() {
    window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;

    if (window.gtag) {
        window.gtag("consent", "update", { analytics_storage: "denied" });
    }
}

/**
 * Stops Google Analytics and removes its cookies
 * when analytics consent is refused or withdrawn.
 */
function revokeAnalytics() {
    disableGoogleAnalytics();
    removeGoogleAnalyticsCookies();
}

export {
    disableGoogleAnalytics,
    initializeAnalytics,
    loadGoogleAnalytics,
    removeGoogleAnalyticsCookies,
    revokeAnalytics,
    trackPageView,
};