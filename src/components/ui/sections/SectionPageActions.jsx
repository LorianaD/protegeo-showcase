import { Button } from "../buttons";

function SectionPageActions({ title }) {
    return (
        <section>
            <h3>
                { title }
            </h3>
            <div className="section-page-actions__buttons">
                <Button label="Modifier les informations" variant="secondary" />
                <Button label="Historique" variant="primary" />
                <Button label="Télécharger en PDF" variant="secondary" />
            </div>
        </section>
    )
}

export default SectionPageActions;