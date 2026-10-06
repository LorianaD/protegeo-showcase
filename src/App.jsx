import { CookieConsentBanner } from "./components";
import { useAnalyticsPageView } from "./hooks";
import AppRoutes from "./routes";

function App() {
    useAnalyticsPageView();
    
    return (
        <>
            <AppRoutes />
            <CookieConsentBanner />
        </>
    );
}

export default App;