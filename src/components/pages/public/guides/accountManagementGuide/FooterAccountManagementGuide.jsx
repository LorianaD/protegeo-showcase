import { IconBand } from "@/components/ui";
import { accountManagementGuideFooter } from "@/data";

function FooterAccountManagementGuide() {
    return (
        <section className="guide-footer">
            <h3 className="guide-footer__label">{accountManagementGuideFooter.title}</h3>

            <ul className="guide-footer__checklist">
                {accountManagementGuideFooter.items.map((item) => (
                    <li className="guide-footer__check-item" key={item}>
                        <IconBand
                            sign="✓"
                            color="green"
                        />
                        {item}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default FooterAccountManagementGuide;