import { FormCard, FormField } from "@/components/ui";

function FormRegister({ section }) {
    return (
        <div>
            <FormCard title={section.title} description={section.description} mention={section.mention} btn_label={section.btn_label} secondaty_label={section.secondary_btn_label}>
                <FormField>

                </FormField>
            </FormCard>
        </div>
    )
}

export default FormRegister;