import { Link } from "react-router"

function Button({ label, href, download, to, type = "button", onClick, variant = "primary", }) {
    
    const classe = `button button--${variant}`;

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
        <button type={ type } className={ classe } onClick={onClick}>
            { label }
        </button>
    )
}

export default Button;