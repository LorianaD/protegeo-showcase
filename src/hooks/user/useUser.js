import { getProfile } from "@/services";
import { useEffect, useState } from "react"

function useUser() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    async function loadUser() {
        try {
            const profile = await getProfile();
            setUser(profile);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        loadUser();
    }, []);

    return {
        user,
        loading,
    }
}

export {
    useUser,
}