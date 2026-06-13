import { FormLogin, RegisterPrompt } from "./index";

function BodyLogin() {
    return (
        <div className="body-auth">
            <FormLogin/>
            <div className="body-auth__divider"></div>
            <RegisterPrompt/>
        </div>
    )
}

export default BodyLogin;