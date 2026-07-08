import { FormCard, FormField, Input, RadioGroup } from "@/components/ui";
import { useRegisterForm } from "@/hooks";
import { validateRegisterForm } from "@/utils";
import { useState } from "react";
import { useNavigate } from "react-router";

function FormRegister({ section, actualStep, setActualStep, formData, setFormData }) {

    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    function handleCancel() {
        navigate("/auth/login");
    }

    function hasErrors(errors) {
        for (const key in errors) {
            return true;
        }

        return false;
    }

    function isCurrentStepValid() {
        const errors = validateRegisterForm(formData, actualStep);
        setFormErrors(errors);

        if (hasErrors(errors)) {
            return false;
        }

        return true;
    }

    function onNext() {
        if (!isCurrentStepValid()) {
            return;
        }

        if (actualStep < 3) {
            setActualStep(actualStep + 1);
        }
    }

    const onPrevious = () => {
        if (actualStep > 1) {
            setActualStep(actualStep - 1);
        }
    };

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    }

    const { 
        loading, 
        error, 
        handleRegister 
    } = useRegisterForm();

    function onRegisterSubmit() {
        if (!isCurrentStepValid()) {
            return;
        }

        handleRegister(formData);
    }

    return (
        <div className="form-card__content-fields">
            <FormCard title={section.title} description={section.description} mention={section.mention} btn_label={section.btn_label} secondaty_label={section.secondary_btn_label} onSubmit={actualStep === 3 ? onRegisterSubmit : onNext} onCancel={actualStep === 1 ? handleCancel : undefined} onPrevious={onPrevious}>
                {section.fields && section.fields.map((field) => (
                    <FormField
                        key={field.name}
                        name={field.name}
                        label={field.label}
                        description={field.description}
                        required={field.required !== false}
                        mention={field.mention}
                    >
                        <Input
                            name={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            value={formData[field.name] || ""}
                            onChange={handleChange}
                        />
                        {formErrors[field.name] && (
                            <p className="form-error">
                                {formErrors[field.name]}
                            </p>
                        )}
                    </FormField>
                ))}

                {section.groups && section.groups.map((group) => {
                    let fieldsInline = "";

                    if (group.type === "inline") {
                        fieldsInline = "form-card__content-fields--inline";
                    }

                    return (
                        <div key={group.type} className={`form-card__content-fields ${fieldsInline}`}>
                            {group.type === "choice" ? (
                                group.fields.map((field, index) => (
                                    <FormField
                                        key={field.name || index}
                                        name={field.name}
                                        label={field.title}
                                        required={field.required !== false}
                                    >
                                        <RadioGroup
                                            name={field.name}
                                            options={field.options}
                                            value={formData[field.name] || ""}
                                            onChange={handleChange}
                                        />
                                        {formErrors[field.name] && (
                                            <p className="form-error">
                                                {formErrors[field.name]}
                                            </p>
                                        )}
                                    </FormField>
                                ))
                            ) : (
                                group.fields.map((field) => (
                                    <FormField
                                        key={field.name}
                                        name={field.name}
                                        label={field.label}
                                        description={field.description}
                                        required={field.required !== false}
                                    >
                                        <Input
                                            name={field.name}
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            value={formData[field.name] || ""}
                                            onChange={handleChange}
                                        />
                                        {formErrors[field.name] && (
                                            <p className="form-error">
                                                {formErrors[field.name]}
                                            </p>
                                        )}                                        
                                    </FormField>
                                ))
                            )}
                        </div>
                    );
                })}
                {error && 
                    <p className="form-error">
                        {error}
                    </p>
                }
            </FormCard>
        </div>
    )
}

export default FormRegister;