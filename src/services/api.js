const API_URL = import.meta.env.VITE_API_URL;

async function apiFetch(endpoint, options = {}) {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(token && {
                Authorization: `Bearer ${token}`,
            }),
            ...options.headers,
        },
    });

    const data = await response.json();

    if (!response.ok) {
        if (response.status === 401 ) {
            localStorage.removeItem("token");
        }

        throw new Error(data.message || "Une erreur est survenu.");
    }

    return data;
}

export {
    apiFetch,
}