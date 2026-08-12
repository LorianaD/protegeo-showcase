import { Button } from "../buttons";

function SectionActionList({actions = [], variant = "quick", onAction}) {
    function handleAction(actionName) {
        if (onAction) {
            onAction(actionName);
        }
    }

    return (
        <div className={`section-action-list section-action-list--${variant}`}>
            {actions.map((action) => (
                <Button
                    key={action.name}
                    label={action.label}
                    variant={action.variant}
                    onClick={() => handleAction(action.name)}
                />
            ))}
        </div>
    );
}

export default SectionActionList;