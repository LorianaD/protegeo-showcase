import { accountManagementGuideFooter } from "@/data";

function FooterAccountManagementGuide() {
    return (
        <footer className="account-management-guide__footer">
            <h3 className="account-management-guide__footer-label">{accountManagementGuideFooter.title}</h3>

            <ul className="account-management-guide__checklist">
                {accountManagementGuideFooter.items.map((item) => (
                    <li className="account-management-guide__check-item" key={item}>
                        <span className="account-management-guide__check-dot">✓</span>
                        {item}
                    </li>
                ))}
            </ul>
        </footer>
    );
}

export default FooterAccountManagementGuide;