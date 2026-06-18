import { SecondaryButton } from "@/components/ui";
import { login } from "@/data";

function RegisterPrompt() {
    const section = login.registerRedirection;
    return (
        <div className="register-prompt">
            <h3 className="register-prompt__title">
                { section.title }
            </h3>
            <SecondaryButton 
                label={ section.btn_label } 
                to={ section.btn_url }
            />
        </div>
    )
}

export default RegisterPrompt;