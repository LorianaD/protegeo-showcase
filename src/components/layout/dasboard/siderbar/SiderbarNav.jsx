import { DashboardNavButton } from "@/components/ui";
import { siderbarDashboard } from "@/data";

function SiderbarNav() {
    const nav = siderbarDashboard.nav;
    return (
        <ul className="siderbar-nav__list">
            <li className="siderbar-nav__item">
                <DashboardNavButton 
                    label={nav.home.link_label} 
                    icon={nav.home.link_icon} 
                    to={nav.home.link_url}
                    variant="siderbar"
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
                                    to={link.link_url}
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