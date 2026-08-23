import FormAddDossier from "./FormAddDossier";
import { addDossierForm } from "@/data";
import { useAddDossierForm } from "@/hooks";

function BodyAddDossier({ onClose, onCreated }) {
    const { actualStep, formData, handleProtectedPersonChange, handleMeasureChange, handleRepresentativeChange, onNext, onPrevious, onSubmit, isAdding, addError } = useAddDossierForm(onClose, onCreated);

    const sections = [
        addDossierForm.protectedPerson,
        addDossierForm.measure,
        addDossierForm.representative,
    ];

    const currentSection = sections[actualStep - 1];

    let currentFormData = formData.protectedPerson;
    let currentHandleChange = handleProtectedPersonChange;

    if (actualStep === 2) {
        currentFormData = formData.measure;
        currentHandleChange = handleMeasureChange;
    }

    if (actualStep === 3) {
        currentFormData = formData.representative;
        currentHandleChange = handleRepresentativeChange;
    }

    return (
        <FormAddDossier
            section={currentSection}
            actualStep={actualStep}
            formData={currentFormData}
            handleChange={currentHandleChange}
            onNext={onNext}
            onPrevious={onPrevious}
            onSubmit={onSubmit}
            isAdding={isAdding}
            addError={addError}
        />
    );
}

export default BodyAddDossier;