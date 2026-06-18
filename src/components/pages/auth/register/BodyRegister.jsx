import { StepIndicator } from "@/components/ui";
import { register } from "@/data";
import FormRegister from "./FormRegister";

function BodyRegister() {
    const stepIndicator = register.stepIndicator;
    const login = register.loginName;
    return (
        <div className="body-auth">
            <StepIndicator section={stepIndicator}/>
            <div className="body-auth__divider"></div>
            <FormRegister section={login}/>
        </div>
    )
}

export default BodyRegister;