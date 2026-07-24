import { DashboardNavButton } from "@/components/ui";
import { siderbarDashboard } from "@/data";
import { useParams } from "react-router";

function SiderbarNav() {
    const nav = siderbarDashboard.nav;
    const { reference } = useParams();

    function buildLinkUrl(linkUrl) {
        if (!linkUrl.includes(":reference")) {
            return linkUrl;
        }

        if (!reference) {
            return linkUrl.replace("/:reference", "/19-A-00480");
        }

        return linkUrl.replace(":reference", reference);
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
                        {section.links.map((link) => (
                            <li className="siderbar-nav__item" key={link.link_label}>
                                <DashboardNavButton 
                                    label={link.link_label} 
                                    icon={link.link_icon} 
                                    to={buildLinkUrl(link.link_url)}
                                    variant="siderbar"
                                />                        
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}

export default SiderbarNav;