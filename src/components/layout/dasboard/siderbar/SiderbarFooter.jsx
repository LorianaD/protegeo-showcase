import { siderbarDashboard } from "@/data";
import { useUser } from "@/hooks";
import { logout } from "@/services";
import { useNavigate } from "react-router";

function SiderbarFooter() {
    const section = siderbarDashboard.footer;
    const navigate = useNavigate();
    const {user, loading} = useUser();

    function handleLogout() {
        logout();
        navigate("/auth/login");
    }

    if (loading || !user ) {
        return null;
    }

    return (
        <div className="siderbar-footer">
            <div className="siderbar-footer__profil">
                <div className="siderbar-footer__profil-icon">
                    <span className="siderbar-footer__profil-initial">
                        {user.firstname?.charAt(0)}
                        {user.lastname?.charAt(0)}
                    </span>
                </div>
                <div className="siderbar-footer__user">
                    <p className="siderbar-footer__user-name">
                        { user.firstname } { user.lastname }
                    </p>
                    <p className="siderbar-footer__user-role">
                        Utilisateur
                    </p>
                </div>
            </div>
            <button className="siderbar-footer__logout" type="button" onClick={handleLogout}>
                <span className="siderbar-footer__logout-label">
                    {section.btn_label}
                </span>
                <div className="siderbar-footer_logout-icon">
                    <img src={section.btn_icon} alt={section.btn_label} />
                </div>
            </button>
        </div>
    )
}

export default SiderbarFooter;