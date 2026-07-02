import { Button } from "@/components/ui";
import { login } from "@/data";

function RegisterPrompt() {
    const section = login.registerRedirection;
    return (
        <div className="register-prompt">
            <h3 className="register-prompt__title">
                { section.title }
            </h3>
            <Button 
                label={ section.btn_label } 
                to={ section.btn_url }
                variant="secondary"
            />
        </div>
    )
}

export default RegisterPrompt;