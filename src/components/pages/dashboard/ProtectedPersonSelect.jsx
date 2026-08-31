import { Select } from "@/components/ui";
import { useLocation, useNavigate, useParams } from "react-router";

function ProtectedPersonSelect({protectedPersons = [], loading = false, error = null, placeholder = "Sélectionner une personne protégée", variant = "dashboard", refreshKey = 0}) {
    const {reference} = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const options = protectedPersons.map((item) => ({
        value: item.reference_number,
        label: `${item.protected_person.firstname} ${item.protected_person.lastname}`,
    }));

    function handleChange(event) {
        const newReference = event.target.value;

        if (!newReference || newReference === reference) {
            return;
        }

        const newPathname = location.pathname.replace(
            reference,
            newReference
        );

        navigate(newPathname);
    }

    if (loading) {
        return null;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <Select 
            name="protected_person"
            value={reference ?? ""}
            options={options}
            placeholder={loading ? "Chargement..." : placeholder}
            variant={variant}
            onChange={handleChange}
            disabled={loading || options.length === 0}
        />
    )
}

export default ProtectedPersonSelect;