import { siderbarDashboard } from "@/data"
import { Link } from "react-router";

function SiderbarHeader() {
    const section = siderbarDashboard.header;
    return (
        <div className="siderbar-header">
            <div className="siderbar-header__logo">
                <Link to="/">
                    <img src={section.logo} alt="logo de protégéo" className="siderbar-header__logo-img"/>
                </Link>
            </div>
            <p className="siderbar-header__slogan">{section.slogan}</p>
        </div>
    )
}

export default SiderbarHeader;