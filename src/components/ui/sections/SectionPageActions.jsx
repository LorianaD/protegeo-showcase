import { Button } from "../buttons";
import SectionActionContainer from "./SectionActionContainer";

function SectionPageActions({ section }) {
    return (
        <SectionActionContainer title={section.title} variant="actions-row">
            <div className="section-page-actions__buttons">
                {section.items.map((action) => (
                    <Button
                        key={action.name}
                        label={action.label}
                        variant={action.variant}
                        to={action.to}
                        href={action.href}
                        download={action.download}
                        onClick={action.onClick}
                    />
                ))}
            </div>
        </SectionActionContainer>
    )
}

export default SectionPageActions;