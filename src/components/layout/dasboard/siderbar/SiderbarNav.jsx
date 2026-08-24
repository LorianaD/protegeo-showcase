import { DashboardNavButton } from "@/components/ui";
import { siderbarDashboard } from "@/data";
import { useProtectedPersons } from "@/hooks";
import { useParams } from "react-router";

function SiderbarNav({ onAddDossier }) {
    const nav = siderbarDashboard.nav;
    const { reference } = useParams();

    const { protectedPersons } = useProtectedPersons();

    const selectedReference = reference ?? protectedPersons[0]?.reference_number;

    function buildLinkUrl(linkUrl) {
        if (!linkUrl.includes(":reference")) {
            return linkUrl;
        }

        if (!selectedReference) {
            return "";
        }

        return linkUrl.replace(":reference", selectedReference);
    }

    return (
        <ul className="siderbar-nav__list">
            <li className="siderbar-nav__item">
                <DashboardNavButton 
                    label={nav.home.link_label} 
                    icon={nav.home.link_icon} 
                    to={nav.home.link_url}
                    variant="siderbar"
                    end={nav.home.end}
                />
            </li>

            {nav.sections.map((section) => (
                <li className="siderbar-nav__section" key={section.title}>
                    <p className="siderbar-nav__section-title">
                        {section.title}
                    </p>
                    <ul className="siderbar-nav__section-list">
                        {section.links.map((link) => {
                            let linkUrl = buildLinkUrl(link.link_url);
                            let onClick;

                            if (link.action === "addProtectedPerson") {
                                linkUrl = undefined;
                                onClick = onAddDossier;
                            }

                            return (
                                <li className="siderbar-nav__item" key={link.link_label}>
                                    <DashboardNavButton 
                                        label={link.link_label} 
                                        icon={link.link_icon} 
                                        to={linkUrl}
                                        onClick={onClick}
                                        variant="siderbar"
                                    />                        
                                </li>
                            )
                        })}
                    </ul>
                </li>
            ))}
        </ul>
    )
}

export default SiderbarNav;