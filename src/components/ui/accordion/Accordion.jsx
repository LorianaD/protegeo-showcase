import { useState } from "react"

function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    function handleToggle() {
        setIsOpen(!isOpen);
    }
    return (
        <article className="accordion">
            <button className={`accordion__button ${isOpen ? "accordion__button--open" : ""}`} onClick={handleToggle}>
                <span>{ title }</span>
                <span>
                    {isOpen ? "▲" : "▼"}
                </span>
            </button>
            {isOpen && (
                <div className="accordion__content">
                    {children}
                </div>
            )}
        </article>
    )
}

export default Accordion