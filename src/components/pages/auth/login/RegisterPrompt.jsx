import { SecondaryButton } from "@/components/ui";
import { loginRegisterRedirection } from "@/data";

function RegisterPrompt() {
    const section = loginRegisterRedirection;
    return (
        <div className="register-prompt">
            <h3 className="register-prompt__title">
                { section.title }
            </h3>
            <SecondaryButton 
                label={ section.btn_label } 
            />
        </div>
    )
}

export default RegisterPrompt;