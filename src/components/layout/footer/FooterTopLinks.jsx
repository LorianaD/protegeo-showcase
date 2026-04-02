import footerNavLinks from "../../../data/footer/footerNavLinks";
import FooterNavColumn from "./FooterNavColumn";

function FooterTopLinks() {
    return (
        <div className="footer__top">
            {/* <div className="footer__top-links"> */}
                {footerNavLinks.map((section) => (
                    <FooterNavColumn
                        key={section.id}
                        title={section.title}
                        links={section.links}
                    />
                ))}
            {/* </div> */}
        </div>
    );
}

export default FooterTopLinks;