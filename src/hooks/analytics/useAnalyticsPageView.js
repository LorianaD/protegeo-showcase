import { useEffect } from "react";
import { useLocation } from "react-router";
import { trackPageView } from "@/services";

/**
 * Tracks page views when the current route changes.
 */
function useAnalyticsPageView() {
    const location = useLocation();

    useEffect(() => {
        trackPageView(location.pathname);
    }, [location.pathname]);
}

export {
    useAnalyticsPageView,
}