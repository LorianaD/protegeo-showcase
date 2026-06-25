import { PrimaryButton, SecondaryButton } from "../buttons";

function SectionPageActions({ title }) {
    return (
        <section>
            <h3>
                { title }
            </h3>
            <div className="section-page-actions__buttons">
                <SecondaryButton label="Modifier les informations" />
                <PrimaryButton label="Historique" />
                <SecondaryButton label="Télécharger en PDF" />
            </div>
        </section>
    )
}

export default SectionPageActions;