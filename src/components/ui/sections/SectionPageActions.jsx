import { Button } from "../buttons";
import SectionActionContainer from "./SectionActionContainer";

function SectionPageActions({ section, reference }) {
    return (
        <SectionActionContainer title={section.title} variant="actions-row">
            <div className="section-page-actions__buttons">
                {section.items.map((action) => {
                    const requiresReference = action.to?.includes(":reference");

                    const to = requiresReference
                        ? reference
                            ? action.to.replace(":reference", reference)
                            : null
                        : action.to;

                    return (
                        <Button
                            key={action.name}
                            label={action.label}
                            variant={action.variant}
                            to={to}
                            href={action.href}
                            download={action.download}
                            onClick={action.onClick}
                            disabled={requiresReference && !reference}
                        />
                    );
                })}
            </div>
        </SectionActionContainer>
    )
}

export default SectionPageActions;