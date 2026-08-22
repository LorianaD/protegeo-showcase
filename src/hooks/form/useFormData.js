import { useState } from "react";

function useFormData(initialData) {
    const [formData, setFormData] = useState(initialData);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((currentData) => ({
            ...currentData,
            [name]: value,
        }));
    }

    function resetForm() {
        setFormData(initialData);
    }

    return {
        formData,
        setFormData,
        handleChange,
        resetForm,
    };
}

export {
    useFormData,
};