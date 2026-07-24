import { DashboardNavButton } from "@/components/ui";
import { useParams } from "react-router";

function DashboardTabs({ page }) {
    const items = page.nav;
    const { reference } = useParams();

    function buildLink(linkUrl) {
        if (!reference) {
            return linkUrl;
        }

        return linkUrl.replace(":reference", reference);
    }

    return (
        <ul className="nav-dashboard">
            {items.map((item) => (
                <li key={item.link_label} className="nav-dashboard__item">
                    <DashboardNavButton label={ item.link_label } to={ buildLink(item.link_url) } icon={ item.link_icon } variant="profile" end={item.end} />
                </li>
            ))}
        </ul>
    )
}

export default DashboardTabs;