import { Button } from "../buttons";

function DashboardSectionHeader({ title, descriptions, variant = "default", notice, labelBtn, variantBtn, onClickBtn, secondLabelBtn, secondVariantBtn, onClickSecondBtn }) {
    return (
        <header className={`dashboard-section-header dashboard-section-header--${variant}`}>
            <div className="dashboard-section-header__container-title">
                <h3 className="dashboard-section-header__title">
                    {title}
                </h3>

                <div className="dashboard-section-header__actions">
                    {secondLabelBtn && (
                        <Button
                            label={secondLabelBtn}
                            variant={secondVariantBtn}
                            onClick={onClickSecondBtn}
                        />
                    )}

                    {labelBtn && (
                        <Button
                            label={labelBtn}
                            variant={variantBtn}
                            onClick={onClickBtn}
                        />
                    )}
                </div>
            </div>


            <div className="dashboard-section-header__description">
                {Object.entries(descriptions).map(([key, description]) => (
                    <p
                        key={key}
                        className="dashboard-section-header__text"
                    >
                        {description}
                    </p>
                ))}
            </div>

            {notice && (
                <p className="dashboard-section-header__warning">
                    {notice}
                </p>
            )}
        </header>
    );
}

export default DashboardSectionHeader;