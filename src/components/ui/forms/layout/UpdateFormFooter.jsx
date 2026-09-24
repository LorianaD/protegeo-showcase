import { Button } from "../../buttons";

function UpdateFormFooter({ cancelLabel, submitLabel, deleteLabel, loadingLabel = "Enregistrement...", onCancel, onDelete, loading = false, error = "" }) {
    return (
        <div className="update-form__footer">
            <div className="update-form__actions">
                {deleteLabel && onDelete && (
                    <Button
                        label={deleteLabel}
                        type="button"
                        onClick={onDelete}
                        disabled={loading}
                        variant="delete"
                    />
                )}

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