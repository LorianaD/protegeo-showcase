import { StepIndicator } from "@/components/ui";
import { register } from "@/data";
import FormRegister from "./FormRegister";
import { useState } from "react";

function BodyRegister() {
    const [actualStep, setActualStep] = useState(1);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        civility: "",
        lastname: "",
        firstname: "",
        address: "",
        addressComplement: "",
        postalCode: "",
        city: "",
    });

    const stepIndicator = register.stepIndicator;

    const sections = [
        register.loginName,
        register.identity,
        register.coordinates,
    ];

    const currentSection = sections[actualStep - 1];

    return (
        <div className="body-auth">
            <StepIndicator section={stepIndicator} actualStep={actualStep} stepsNumber="3"/>
            <div className="body-auth__divider"></div>
            <FormRegister 
                section={currentSection} 
                actualStep={actualStep} 
                setActualStep={setActualStep} 
                formData={formData} 
                setFormData={setFormData} 
            />
        </div>
    )
}

export default BodyRegister;