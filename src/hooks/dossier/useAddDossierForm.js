import { useState } from "react";
import { useFormData } from "../form";
import { useAddDossier } from "./useAddDossier";

function useAddDossierForm(onClose, onCreated) {
    const [actualStep, setActualStep] = useState(1);

    const initialFormData = {
        protectedPerson: {
            gender: "",
            lastname: "",
            firstname: "",
            birth_date: "",
            birth_place: "",
            nationality: "",
            address: "",
            postal_code: "",
            city: "",
        },

        measure: {
            judgment_date: "",
            start_date: "",
            measure_type: "",
            reference_number: "",
            tribunal_name: "",
        },

        // Prepared for future legal representative management.
        // Only role_type is currently sent to the API.
        representative: {
            is_current_user_representative: "",
            role_type: "",
            lastname: "",
            firstname: "",
            birth_date: "",
            birth_place: "",
            nationality: "",
            address: "",
            postal_code: "",
            city: "",
        },

        coRepresentative: [],
        subrogates: [],
    };

    const { formData, setFormData, resetForm } = useFormData(initialFormData);

    const { addDossier, isAdding, addError } = useAddDossier();

    function handleSectionChange(event, sectionName) {
        const { name, value } = event.target;

        setFormData((currentData) => ({
            ...currentData,
            [sectionName]: {
                ...currentData[sectionName],
                [name]: value,
            },
        }));
    }

    function handleProtectedPersonChange(event) {
        handleSectionChange(event, "protectedPerson");
    }

    function handleMeasureChange(event) {
        handleSectionChange(event, "measure");
    }

    function handleRepresentativeChange(event) {
        handleSectionChange(event, "representative");
    }

    function addCoRepresentative() {
        setFormData((currentData) => ({
            ...currentData,
            coRepresentative: [
                ...currentData.coRepresentative,
                {
                    role_type: "",
                    lastname: "",
                    firstname: "",
                    birth_date: "",
                    birth_place: "",
                    nationality: "",
                    address: "",
                    postal_code: "",
                    city: "",
                },
            ],
        }));
    }

    function addSubrogate() {
        setFormData((currentData) => ({
            ...currentData,
            subrogates: [
                ...currentData.subrogates,
                {
                    role_type: "",
                    lastname: "",
                    firstname: "",
                    birth_date: "",
                    birth_place: "",
                    nationality: "",
                    address: "",
                    postal_code: "",
                    city: "",
                },
            ],
        }));
    }

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
        const dossierData = {
            referenceNumber: formData.measure.reference_number,
            roleType: formData.representative.role_type,

            protected_person: formData.protectedPerson,

            measure_protection: {
                judgment_date: formData.measure.judgment_date,
                start_date: formData.measure.start_date,
                measure_type: formData.measure.measure_type,
                tribunal_name: formData.measure.tribunal_name,
            },
        };

        // Legal representative details will be connected later.
        const dossier = await addDossier(dossierData);

        if (!dossier) {
            return;
        }

        resetForm();
        setActualStep(1);

        onCreated();
        onClose();
    }

    return {
        actualStep,
        formData,
        handleProtectedPersonChange,
        handleMeasureChange,
        handleRepresentativeChange,
        addCoRepresentative,
        addSubrogate,
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