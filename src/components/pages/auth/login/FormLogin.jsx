import { FormCard, FormField, Input } from "@/components/ui";
import { login } from "@/data";


function FormLogin() {
    const section = login.form;
    return (
        <FormCard title={ section.title } btn_label={section.btn_label} >
            {section.fields.map((field) => (
                <FormField key={field.name} name={field.name} label={field.label} description={field.description}>
                    <Input name={field.name} type={field.type} placeholder={field.placeholder} />
                </FormField>
            ))}
        </FormCard>
    )
}

export default FormLogin;