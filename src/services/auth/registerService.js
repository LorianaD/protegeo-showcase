import { apiFetch } from "../api"

function register(userData) {
    return apiFetch("/auth/register", {
        method: "POST",
        body: JSON.stringify(userData),
    });
}

export {
    register,
}