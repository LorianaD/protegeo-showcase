import { apiFetch } from "@/services";

async function getProtectedPersonsService() {
    const data = await apiFetch("/dossiers", {
        method: "GET",
    });

    return (data ?? []).filter((dossier) => dossier.protected_person);
}

export {
    getProtectedPersonsService,
};