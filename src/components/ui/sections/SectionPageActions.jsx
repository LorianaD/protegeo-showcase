import { Button } from "../buttons";

function SectionPageActions({ section }) {
    return (
        <section className="section-page-actions">
            <h3>
                {section.title}
            </h3>

            <div className="section-page-actions__buttons">
                {section.items.map((action) => (
                    <Button
                        key={action.name}
                        label={action.label}
                        variant={action.variant}
                    />
                ))}
            </div>
        </section>
    )
}

export default SectionPageActions;