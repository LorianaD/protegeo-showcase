import { login } from "@/services";
import { validateLoginForm } from "@/utils";
import { useState } from "react";
import { useNavigate } from "react-router"

function useLoginForm() {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [apiError, setApiError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setValues((currentValues) => ({
            ...currentValues,
            [name]: value,
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();

        console.log("Le formulaire est soumis !");
        console.log(values);
        

        setApiError("");

        const validationErrors = validateLoginForm(values);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        try {
            setIsLoading(true);
            await login(values.email, values.password);
            navigate("/dashboard");
        } catch (error) {
            setApiError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return {
        values,
        errors,
        apiError,
        isLoading,
        handleChange,
        handleSubmit,
    };
}

export {
    useLoginForm,
}