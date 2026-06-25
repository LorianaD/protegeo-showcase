import { siderbarDashboard } from "@/data";

function SiderbarFooter() {
    const section = siderbarDashboard.footer;
    return (
        <div className="siderbar-footer">
            <div className="siderbar-footer__profil">
                <div className="siderbar-footer__profil-icon">
                    <span className="siderbar-footer__profil-initial">LD</span>
                </div>
                <div className="siderbar-footer__user">
                    <p className="siderbar-footer__user-name">
                        User
                    </p>
                    <p className="siderbar-footer__user-role">
                        Rôle
                    </p>                    
                </div>
            </div>
            <div className="siderbar-footer__logout">
                <p className="siderbar-footer__logout-label">
                    {section.btn_label}
                </p>
                <div className="siderbar-footer_logout-icon">
                    <img src={section.btn_icon} alt={section.btn_label} />
                </div>
            </div>
        </div>
    )
}

export default SiderbarFooter;