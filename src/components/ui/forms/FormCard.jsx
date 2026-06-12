import { PrimaryButton } from "../buttons";

function FormCard({ title, description, children, btn_label }) {
    return (
        <section className="form-card">
            {title && (
                <h3 className="form-card__title">
                    { title }
                </h3>
            )}

            {description && (
                <p className="form-card__description">
                    { description }
                </p>
            )}

            <div className="form-card__content">
                { children }
            </div>

            <PrimaryButton>
                { btn_label }
            </PrimaryButton>
        </section>
    );
}

export default FormCard;