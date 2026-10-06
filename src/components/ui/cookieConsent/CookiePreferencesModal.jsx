import { useState } from "react";
import { Button, Checkbox, Modal } from "@/components/ui";
import { cookiesBanner } from "@/data";
import { DEFAULT_COOKIE_CONSENT, getCookieConsent, initializeAnalytics, refuseOptionalCookies, revokeAnalytics, saveCookieConsent } from "@/services";

function CookiePreferencesModal({ isOpen, onClose, onSave }) {
    const [preferences, setPreferences] = useState(
        getCookieConsent() ?? DEFAULT_COOKIE_CONSENT
    );

    if (!isOpen) {
        return null;
    }

    function handleChange(category) {
        setPreferences((currentPreferences) => ({
            ...currentPreferences,
            [category]: !currentPreferences[category],
        }));
    }

    function handleRefuse() {
        const consent = refuseOptionalCookies();

        revokeAnalytics();

        setPreferences(consent);
        onSave();
    }

    /**
     * Saves the selected preferences and applies the analytics choice
     * immediately. Revoking is harmless when no analytics cookie exists.
     */
    function handleSave() {
        saveCookieConsent(preferences);

        if (preferences.analytics) {
            initializeAnalytics();
        } else {
            revokeAnalytics();
        }

        onSave();
    }

    return (
        <Modal title={cookiesBanner.preferences.title} onClose={onClose}>
            <p>
                {cookiesBanner.preferences.description}
            </p>

            <div className="cookie-preferences">
                {cookiesBanner.preferences.categories.map((category) => (
                    <div
                        key={category.name}
                        className="cookie-preferences__item"
                    >
                        <div>
                            <h3>{category.title}</h3>
                            <p>{category.description}</p>
                        </div>

                        <Checkbox
                            name={category.name}
                            variant="switch"
                            checked={
                                category.disabled
                                    ? true
                                    : preferences[category.name]
                            }
                            disabled={category.disabled}
                            onChange={() => handleChange(category.name)}
                        />
                    </div>
                ))}
            </div>

            <div className="cookie-preferences__actions">
                <Button
                    label={cookiesBanner.preferences.actions.refuse}
                    variant="secondary"
                    onClick={handleRefuse}
                />

                <Button
                    label={cookiesBanner.preferences.actions.save}
                    onClick={handleSave}
                />
            </div>
        </Modal>
    );
}

export default CookiePreferencesModal;