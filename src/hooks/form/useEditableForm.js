import { createFormData } from "@/utils";
import { useEffect, useState } from "react";

function useEditableForm(fieldList, sourceData) {
    const [editing, setEditing] = useState(false);

    const [formData, setFormData] = useState(
        createFormData(fieldList)
    );

    useEffect(() => {
        if (sourceData) {
            setFormData(
                createFormData(fieldList, sourceData)
            );
        }
    }, [sourceData]);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((currentData) => ({
            ...currentData,
            [name]: value,
        }));
    }

    function handleEdit() {
        setEditing(true);
    }

    function handleCancel() {
        setEditing(false);

        setFormData(
            createFormData(fieldList, sourceData)
        );
    }

    function closeEditing() {
        setEditing(false);
    }

    return {
        editing,
        formData,
        setFormData,
        handleChange,
        handleEdit,
        handleCancel,
        closeEditing,
    };
}

export {
    useEditableForm,
}