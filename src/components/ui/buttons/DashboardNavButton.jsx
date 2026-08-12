import { NavLink } from "react-router";

function DashboardNavButton({ label , to , icon , variant = "siderbar", end = false }) {
    if (!to) {
        return (
            <div className={`dashboard-nav-button dashboard-nav-button--${variant} dashboard-nav-button--disabled`}>
                <div className="dashboard-nav-button__icon">
                    <img
                        src={icon.default}
                        alt=""
                        className="dashboard-nav-button__icon-img"
                    />
                </div>

                <span>{label}</span>
            </div>
        );
    }
    
    function getClassName({ isActive }) {
        const activeClass = isActive && to ? `dashboard-nav-button--${variant}-active` : "";

        return `dashboard-nav-button dashboard-nav-button--${variant} ${activeClass}`;
    }

    function isButtonActive(isActive) {
        return isActive && to;
    }

    return (
        <NavLink to={ to || "#" } end={end} className={getClassName}>
            {({ isActive }) => {
                const active = isButtonActive(isActive);
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