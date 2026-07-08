import { register } from "@/services";
import { mapRegisterFormToApi } from "@/utils";
import { useState } from "react";
import { useNavigate } from "react-router"

function useRegisterForm() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function handleRegister(formData) {
        setLoading(true);
        setError(null);

        try {
            const userData = mapRegisterFormToApi(formData);

            await register(userData);

            navigate("/auth/login");
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    return {
        loading,
        error,
        handleRegister,
    };
}

export {
    useRegisterForm,
}