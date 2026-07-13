import { Button } from "../buttons";

function UpdateFormFooter({cancelLabel, submitLabel, loadingLabel = "Enregistrement...", onCancel, loading = false, error = ""}) {
    return (
        <div className="update-form__footer">
            <div className="update-form__actions">
                <Button
                    label={cancelLabel}
                    type="button"
                    onClick={onCancel}
                    disabled={loading}
                    variant="secondary"
                />

                <Button
                    label={loading ? loadingLabel : submitLabel}
                    type="submit"
                    disabled={loading}
                    variant="primary"
                />
            </div>

            {error && (
                <p className="form-error">
                    {error}
                </p>
            )}
        </div>
    );   
}

export default UpdateFormFooter;