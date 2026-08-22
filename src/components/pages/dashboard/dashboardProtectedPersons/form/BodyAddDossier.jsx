import { useState } from "react";
import FormAddDossier from "./FormAddDossier";
import { addDossierForm } from "@/data";
import { useAddDossierForm } from "@/hooks";

function BodyAddDossier({ onClose }) {
    const { actualStep, formData, handleChange, onNext, onPrevious, resetAddDossierForm } = useAddDossierForm(onClose);

    const sections = [
        addDossierForm.protectedPerson,
        addDossierForm.measure,
        addDossierForm.curator,
    ];

    const currentSection = sections[actualStep - 1];

    return (
        <FormAddDossier
            section={currentSection}
            actualStep={actualStep}
            formData={formData}
            handleChange={handleChange}
            onNext={onNext}
            onPrevious={onPrevious}
            resetForm={resetAddDossierForm}
            onClose={onClose}
        />
    );
}

export default BodyAddDossier;