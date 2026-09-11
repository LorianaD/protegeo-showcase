import { apiFetch } from "@/services";

async function updateUserProfileService(profileData) {
    const data = await apiFetch("/user/profile", {
        method: "PATCH",
        body: JSON.stringify(profileData),
    });
    
    return data;
}

export {
    updateUserProfileService,
}