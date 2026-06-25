import { FormCard, FormField, Input, RadioGroup } from "@/components/ui";

function FormRegister({ section, actualStep, setActualStep }) {

    const onNext = () => {
        if (actualStep < 3) {
            setActualStep(actualStep + 1);
        }
    };

    const onPrevious = () => {
        if (actualStep > 1) {
            setActualStep(actualStep - 1);
        }
    };

    return (
        <div className="form-card__content-fields">
            <FormCard title={section.title} description={section.description} mention={section.mention} btn_label={section.btn_label} secondaty_label={section.secondary_btn_label} onNext={onNext} onPrevious={onPrevious}>
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
                        />
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
                                            options={field.gender}
                                        />
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
                                        />
                                    </FormField>
                                ))
                            )}
                        </div>
                    );
                })}
            </FormCard>
        </div>
    )
}

export default FormRegister;