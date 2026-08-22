import { useState } from "react";
import { useFormData } from "../form";
import { useAddDossier } from "./useAddDossier";

function useAddDossierForm(onClose) {
    const [actualStep, setActualStep] = useState(1);

    const initialFormData = {
        gender: "",
        lastname: "",
        firstname: "",
        birthDate: "",
        birthPlace: "",
        address: "",
        postalCode: "",
        city: "",

        judgmentDate: "",
        measureType: "",
        referenceNumber: "",
        tribunalName: "",

        roleType: "",
    };

    const { formData, setFormData, handleChange, resetForm } = useFormData(initialFormData);

    const { addDossier, isAdding, addError } = useAddDossier();

    function onNext() {
        if (actualStep < 3) {
            setActualStep(actualStep + 1);
        }
    }

    function onPrevious() {
        if (actualStep > 1) {
            setActualStep(actualStep - 1);
        }
    }

    async function onSubmit() {
        const dossier = await addDossier(formData);

        if (!dossier) {
            return;
        }

        resetForm();
        setActualStep(1);
        onClose();
    }

    return {
        actualStep,
        setActualStep,
        formData,
        setFormData,
        handleChange,
        onNext,
        onPrevious,
        onSubmit,
        isAdding,
        addError,
    };
}

export {
    useAddDossierForm,
};