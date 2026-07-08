import { FormCard, FormField, Input } from "@/components/ui";
import { login } from "@/data";
import { useLoginForm } from "@/hooks";


function FormLogin() {
    const section = login.form;

    const {
        values,
        errors,
        apiError,
        isLoading,
        handleChange,
        handleSubmit,
    } = useLoginForm();

    return (
        <FormCard title={ section.title } btn_label={ isLoading ? "Connexion..." : section.btn_label } onSubmit={ handleSubmit } >
            {section.fields.map((field) => (
                <FormField key={field.name} name={field.name} label={field.label} description={field.description}>
                    <Input name={field.name} type={field.type} placeholder={field.placeholder} value={values[field.name]} onChange={handleChange} />
                </FormField>
            ))}

            {apiError && (
                <p className="form-error">{ apiError }</p>
            )}
        </FormCard>
    )
}

export default FormLogin;