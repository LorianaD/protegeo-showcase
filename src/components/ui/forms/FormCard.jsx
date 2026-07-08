import { Button } from "../buttons";

function FormCard({ title, description, mention, children, btn_label, secondaty_label, onNext, onPrevious, onSubmit }) {
    return (
        <form className="form-card" onSubmit={ onSubmit }>
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
                    <Button 
                        label={secondaty_label}
                        onClick={onPrevious}
                        variant="secondary"
                        type="button"
                    />
                )}

                <Button 
                    onClick={onNext} 
                    label={btn_label} 
                    variant="primary" 
                    type="submit"
                />
            </div>


        </form>
    );
}

export default FormCard;