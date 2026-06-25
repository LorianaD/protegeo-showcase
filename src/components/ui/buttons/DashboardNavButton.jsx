import { NavLink } from "react-router";

function DashboardNavButton({ label , to , icon , variant = "siderbar" }) {
    return (
        <NavLink to={ to || "#" } end={to === "/dashboard"} className={({ isActive }) => `dashboard-nav-button dashboard-nav-button--${variant} ${isActive && to ? `dashboard-nav-button--${variant}-active` : ""}`}>
            {({ isActive }) => {
                const active = isActive && to;
                return (
                <>
                    <div className={`dashboard-nav-button__icon`}>
                        <img src={ active ? icon.active : icon.default } alt={ label }  className={`dashboard-nav-button__icon-img`}/>
                    </div>
                    <span className={`dashboard-nav-button__label dashboard-nav-button__label--${variant}`}>
                        { label }
                    </span>
                </>
            )}}
        </NavLink>
    )
}

export default DashboardNavButton;