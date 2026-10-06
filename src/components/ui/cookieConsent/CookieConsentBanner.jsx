import { useState } from "react";
import { Button, CookiePreferencesModal } from "@/components/ui";
import { cookiesBanner } from "@/data";
import { acceptAllCookies, hasCookieConsentChoice, initializeAnalytics, refuseOptionalCookies, revokeAnalytics } from "@/services";

function CookieConsentBanner() {
    const [isVisible, setIsVisible] = useState(
        !hasCookieConsentChoice()
    );

    const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

    function handleAccept() {
        acceptAllCookies();
        initializeAnalytics();
        
        setIsVisible(false);
    }

    function handleRefuse() {
        refuseOptionalCookies();
        revokeAnalytics();
        setIsVisible(false);
    }

    function handleCustomize() {
        setIsPreferencesOpen(true);
    }

    function handleClosePreferences() {
        setIsPreferencesOpen(false);
    }

    function handleSavePreferences() {
        setIsPreferencesOpen(false);
        setIsVisible(false);
    }

    if (!isVisible) {
        return null;
    }

    return (
        <>
            <aside className="cookie-consent" aria-label={cookiesBanner.title}>
                <div className="cookie-consent__content">
                    <div className="cookie-consent__text">
                        <h2 className="cookie-consent__title">
                            {cookiesBanner.title}
                        </h2>

                        <p>
                            {cookiesBanner.description}
                        </p>
                    </div>

                    <div className="cookie-consent__actions">
                        <Button
                            label={cookiesBanner.actions.refuse}
                            variant="secondary"
                            onClick={handleRefuse}
                        />

                        <Button
                            label={cookiesBanner.actions.customize}
                            variant="secondary"
                            onClick={handleCustomize}
                        />

                        <Button
                            label={cookiesBanner.actions.accept}
                            onClick={handleAccept}
                        />
                    </div>
                </div>
            </aside>

            <CookiePreferencesModal
                isOpen={isPreferencesOpen}
                onClose={handleClosePreferences}
                onSave={handleSavePreferences}
            />
        </>
    );
}

export default CookieConsentBanner;