import FooterTopLinks from "./footer/FooterTopLinks.jsx";
import FooterBrandBlock from "./footer/FooterBrandBlock.jsx";
import FooterBottomLinks from "./footer/FooterBottomLinks.jsx";

function Footer() {
    return(
        <footer className="footer">

            <FooterTopLinks/>
            <FooterBrandBlock/>
            <FooterBottomLinks/>

        </footer>
    )
}

export default Footer