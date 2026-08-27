import { Select } from "@/components/ui";

function YearSelect({ year, options = [], onChange, placeholder = "Sélectionner une année", variant = "dashboard", loading = false }) {
    return (
        <Select
            name="management_account_year"
            value={year ?? ""}
            options={options}
            placeholder={loading ? "Chargement..." : placeholder}
            variant={variant}
            onChange={onChange}
            disabled={loading || options.length === 0}
        />
    );
}

export default YearSelect;