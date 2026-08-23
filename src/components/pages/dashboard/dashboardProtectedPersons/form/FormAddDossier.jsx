import { FormCard, FormField, Input, RadioGroup, Select } from "@/components/ui";
import { hasErrors, validateRequiredFields } from "@/utils";
import { useState } from "react";

function FormAddDossier({ section, actualStep, formData, handleChange, onNext, onPrevious, onSubmit, isAdding, addError }) {
    const [formErrors, setFormErrors] = useState({});

    function isCurrentStepValid() {
        const errors = {};

        if (section.fields) {
            validateRequiredFields(
                section.fields,
                formData,
                errors
            );
        }

        if (section.groups) {
            section.groups.forEach((group) => {
                validateRequiredFields(
                    group.fields,
                    formData,
                    errors
                );
            });
        }

        setFormErrors(errors);

        if (hasErrors(errors)) {
            return false;
        }

        return true;
    }

    function handleNext() {
        if (!isCurrentStepValid()) {
            return;
        }

        onNext();
    }

    function handleSubmit() {
        if (!isCurrentStepValid()) {
            return;
        }

        onSubmit();
    }

    return (
        <FormCard
            title={section.title}
            description={section.description}
            mention={section.mention}
            btn_label={actualStep === 3 ? "Valider" : "Suivant"}
            secondary_label={actualStep > 1 ? "Précédent" : undefined}
            onSubmit={actualStep === 3 ? handleSubmit : handleNext}
            onPrevious={onPrevious}
        >
            {section.fields && section.fields.map((field) => (
                <FormField
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    required={field.required !== false}
                >
                    {field.type === "radio" ? (
                        <RadioGroup
                            name={field.name}
                            options={field.options}
                            value={formData[field.name] || ""}
                            onChange={handleChange}
                        />
                    ) : field.options ? (
                        <Select
                            name={field.name}
                            options={field.options}
                            placeholder={field.placeholder}
                            value={formData[field.name] || ""}
                            onChange={handleChange}
                        />
                    ) : (
                        <Input
                            name={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            value={formData[field.name] || ""}
                            onChange={handleChange}
                        />
                    )}

                    {formErrors[field.name] && (
                        <p className="form-field__error">
                            {formErrors[field.name]}
                        </p>
                    )}
                </FormField>
            ))}

            {section.groups && section.groups.map((group) => (
                <div
                    key={group.type}
                    className="form-card__content-fields"
                >
                    {group.fields.map((field) => (
                        <FormField
                            key={field.name}
                            name={field.name}
                            label={field.label || field.title}
                            required={field.required !== false}
                        >
                            {group.type === "choice" ? (
                                <RadioGroup
                                    name={field.name}
                                    options={field.options}
                                    value={formData[field.name] || ""}
                                    onChange={handleChange}
                                />
                            ) : field.options ? (
                                <Select
                                    name={field.name}
                                    options={field.options}
                                    placeholder={field.placeholder}
                                    value={formData[field.name] || ""}
                                    onChange={handleChange}
                                />
                            ) : (
                                <Input
                                    name={field.name}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    value={formData[field.name] || ""}
                                    onChange={handleChange}
                                />
                            )}

                            {formErrors[field.name] && (
                                <p className="form-field__error">
                                    {formErrors[field.name]}
                                </p>
                            )}
                        </FormField>
                    ))}
                </div>
            ))}

            {addError && (
                <p className="form-field__error">
                    {addError}
                </p>
            )}

            {isAdding && (
                <p>Enregistrement...</p>
            )}
        </FormCard>
    );
}

export default FormAddDossier;