import { apiFetch } from "../api";

async function updatePasswordService(passwordData) {
    const data = await apiFetch("/user/password", {
        method: "PATCH",
        body: JSON.stringify(passwordData),
    });

    return data;
}

export {
    updatePasswordService,
}