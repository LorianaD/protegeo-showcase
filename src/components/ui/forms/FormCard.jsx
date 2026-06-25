import { PrimaryButton, SecondaryButton } from "../buttons";

function FormCard({ title, description, mention, children, btn_label, secondaty_label, onNext, onPrevious }) {
    return (
        <section className="form-card">
            <div className="form-card__header">
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

                {mention && (
                    <p className="form-card__mention">
                        { mention }
                    </p>
                )}                
            </div>

            <div className="form-card__content">
                { children }
            </div>

            <div className="form-card__cta-content">
                {secondaty_label && (
                    <SecondaryButton 
                        label={secondaty_label}
                        onClick={onPrevious}    
                    />
                )}

                <PrimaryButton onClick={onNext}>
                    { btn_label }
                </PrimaryButton>                
            </div>


        </section>
    );
}

export default FormCard;