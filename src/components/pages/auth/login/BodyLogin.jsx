import { FormLogin, RegisterPrompt } from "./index";

function BodyLogin() {
    return (
        <div className="body-login">
            <FormLogin/>
            <div className="body-login__divider"></div>
            <RegisterPrompt/>
        </div>
    )
}

export default BodyLogin;