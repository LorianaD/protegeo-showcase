import { DashboardNavButton } from "@/components/ui";

function DashboardTabs({ page }) {
    const items = page.nav;
    return (
        <ul className="nav-dashboard">
            {items.map((item) => (
                <li key={item.link_label} className="nav-dashboard__item">
                    <DashboardNavButton label={ item.link_label } to={ item.link_url } icon={ item.link_icon } variant="profile" />
                </li>
            ))}
        </ul>
    )
}

export default DashboardTabs;