import { Select } from "@/components/ui";

function MonthSelect({ label, month, options = [], onChange, placeholder = "Sélectionner un mois", variant = "dashboard", loading = false }) {
    return (
        <div className="select-month__container">
            <p>{label}</p>
            <Select
                name="management_account_month"
                value={month ?? ""}
                options={options}
                placeholder={loading ? "Chargement..." : placeholder}
                variant={variant}
                onChange={onChange}
                disabled={loading || options.length === 0}
            />        
        </div>

    )
}

export default MonthSelect;