import { Link } from "react-router"

function PrimaryButton({ children, href, download, to, type = "button", onClick, variant = "default", }) {
    
    const classe = `button primary-button primary-button--${variant}`;

    if (href) {
        return (
            <a href={ href } download={ download } target="_blank" className={ classe }>
                { children }
            </a>
        )
    }

    if (to) {
        return (
            <Link to={ to } className={ classe }>
                { children }
            </Link>
        )
    }
    
    return(
        <button type={ type } className={ classe } onClick={onClick}>
            { children }
        </button>
    )
}

export default PrimaryButton