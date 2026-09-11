const API_URL = import.meta.env.VITE_API_URL;

async function apiFetch(endpoint, options = {}) {
    const token = localStorage.getItem("token");
    const isFormData = options.body instanceof FormData;

    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
            ...(!isFormData && {
                "Content-Type": "application/json",
            }),
            ...(token && {
                Authorization: `Bearer ${token}`,
            }),
            ...options.headers,
        },
    });

    const contentType = response.headers.get("content-type");

    if (options.responseType === "blob") {
        if (!response.ok) {
            if (response.status === 401) {
                localStorage.removeItem("token");
            }

            throw new Error("Une erreur est survenue.");
        }

        return await response.blob();
    }

    const data = contentType?.includes("application/json")
        ? await response.json()
        : null;

    if (!response.ok) {
        if (response.status === 401) {
            localStorage.removeItem("token");
        }

        throw new Error(data?.message || "Une erreur est survenue.");
    }

    return data;
}

export {
    apiFetch,
};