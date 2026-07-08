import { apiFetch } from "../api";

async function login(email, password) {
    const data = await apiFetch("/auth/login_check", {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    });

    localStorage.setItem("token", data.token);

    return data;
}

function logout() {
    localStorage.removeItem("token");
}

function isAuthenticated() {
    return !!localStorage.getItem("token");
}

async function getProfile() {
    return apiFetch("/user/profile");
}

export {
    login,
    logout,
    isAuthenticated,
    getProfile,
}