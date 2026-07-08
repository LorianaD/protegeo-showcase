import { Button } from "../buttons";

function FormCard({ title, description, mention, children, btn_label, secondaty_label, onNext, onCancel, onPrevious, onSubmit }) {
    function handleSubmit(event) {
        event.preventDefault();
        
        if (onSubmit) {
            onSubmit(event);
            return;
        }

        if (onNext) {
            onNext(event);
        }        
    }


    return (
        <form className="form-card" onSubmit={ handleSubmit }>
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
                        onClick={onCancel || onPrevious}
                        variant="secondary"
                        type="button"
                    />
                )}

                <Button 
                    label={btn_label} 
                    variant="primary" 
                    type="submit"
                />
            </div>


        </form>
    );
}

export default FormCard;