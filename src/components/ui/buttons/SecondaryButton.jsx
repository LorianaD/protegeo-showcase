import { Link } from "react-router"

function SecondaryButton({ label, href, download, to, type = "button" }) {
    
    const classe = "button secondary-button";

    if (href) {
        return (
            <a href={ href } download={ download } target="_blank" className={ classe }>
                { label }
            </a>
        )
    }

    if (to) {
        return (
            <Link to={ to } className={ classe }>
                { label }
            </Link>
        )
    }
    
    return(
        <button type={ type } className={ classe }>
            { label }
        </button>
    )
}

export default SecondaryButton;