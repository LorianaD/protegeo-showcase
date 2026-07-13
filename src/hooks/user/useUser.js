import { getProfile } from "@/services";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router";

function useUser() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    async function loadUser() {
        setLoading(true);

        try {
            const profile = await getProfile();
            setUser(profile);
        } catch (error) {
            console.error(error);

            if (!localStorage.getItem("token")) {
                navigate("/auth/login");
            }
            
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
        refreshUser: loadUser,
    }
}

export {
    useUser,
}