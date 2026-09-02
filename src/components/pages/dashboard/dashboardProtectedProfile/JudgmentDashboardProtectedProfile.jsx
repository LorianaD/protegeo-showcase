import { DashboardSection, InfoFieldGroup, InfoField, DashboardSectionLoading, UpdateFormFooter } from "@/components/ui";
import { useCurrentMeasure, useDossier, useEditableForm, useUpdateDossier, useUpdateMeasure } from "@/hooks";
import { formatDate, getMeasureDeadline, getMeasureLabel } from "@/utils";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";

function JudgmentDashboardProtectedProfile () {
    const { page, dossierId } = useOutletContext();
    
    const section = page.judgment;
    const detailFields = section.details.flat();

    /*
     * Only fields with a source can be edited and sent to the API.
     * Calculated and relational fields remain read-only.
     */
    const editableDetailFields = detailFields.filter(
        (field) => field.source,
    );

    const fieldList = [
        ...editableDetailFields.map((field) => field.name),
        section.notes.name,
    ];

    const dossierFieldList = editableDetailFields
        .filter((field) => field.source === "dossier")
        .map((field) => field.name);

    const measureFieldList = [
        ...editableDetailFields
            .filter((field) => field.source === "measure")
            .map((field) => field.name),
        section.notes.name,
    ];

    const { dossier, loading: dossierLoading, error: dossierError, refreshDossier } = useDossier(dossierId);
    const { measure, loading: measureLoading, error: measureError, refreshMeasure } = useCurrentMeasure(dossierId);

    const [initialData, setInitialData] = useState(null);

    useEffect(() => {
        if (!dossier || !measure) {
            return;
        }

        setInitialData({
            ...dossier,
            ...measure,
        });
    }, [dossier, measure]);

    const { editing, formData, handleChange, handleEdit, handleCancel, closeEditing } = useEditableForm(fieldList, initialData);

    const {updateDossier, updatingDossier, updateErrorDossier} = useUpdateDossier();
    const {updateMeasure, updatingMeasure, updateErrorMeasure} = useUpdateMeasure();

    const loading = dossierLoading || measureLoading;
    const error = dossierError || measureError;
    const updating = updatingDossier || updatingMeasure;
    const updateError = updateErrorDossier || updateErrorMeasure;

    async function handleSubmit(event) {
        event.preventDefault();

        const dossierData = {};
        const measureData = {};

        /*
         * Build the payload expected by the dossier endpoint.
         */
        dossierFieldList.forEach((fieldName) => {
            dossierData[fieldName] = formData[fieldName];
        });

        /*
         * Build the payload expected by the measure endpoint.
         */
        measureFieldList.forEach((fieldName) => {
            measureData[fieldName] = formData[fieldName];
        });

        const updatedDossier = await updateDossier(
            dossierId,
            dossierData,
        );

        if (!updatedDossier) {
            return;
        }

        const updatedMeasure = await updateMeasure(
            dossierId,
            measure.id,
            measureData,
        );

        if (!updatedMeasure) {
            return;
        }

        await Promise.all([
            refreshDossier(),
            refreshMeasure(),
        ]);

        closeEditing();
    }

    if (loading) {
        return (
            <DashboardSectionLoading section={section} page={page}/>
        );
    }

    if (error) {
        return (
            <DashboardSection title={section.header.title} variant="profile">
                <p>{error}</p>
            </DashboardSection>
        )
    }

    if (!dossier) {
        return (
            <DashboardSection title={section.header.title} variant="profile">
                <p>Aucun dossier trouvé.</p>
            </DashboardSection>
        )
    }

    if (!measure) {
        return (
            <DashboardSection title={section.header.title} variant="profile">
                <p>Aucune mesure de protection trouvée.</p>
            </DashboardSection>
        );
    }

    const detailRows = section.details.map((row) =>
        row.map((item) => {
            let value = item.value;
            let editable = false;

            if (item.source === "dossier") {
                value = dossier[item.name];
                editable = true;
            }

            if (item.source === "measure") {
                value = measure[item.name];
                editable = true;
            }

            if (item.name === "measure_type") {
                value = getMeasureLabel(measure);
            }

            /*
            * Renewal is calculated and remains read-only.
            * The final business rule will be added later.
            */
            if (item.name === "renewal") {
                value = formatDate(getMeasureDeadline(measure));
            }

            if (item.type === "date") {
                value = formatDate(value);
            }

            return {
                ...item,
                value: value ?? "Non renseigné",
                editable,
            };
        })
    );

    const noteValue = measure[section.notes.name] ?? section.notes.placeholder;

    return (
        <DashboardSection title={section.header.title} actionLabel={ editing ? null : section.header.btn_label } onAction={handleEdit} variant="profile">
            <form className="update-form" onSubmit={handleSubmit}>
                <div className="info-list">
                    {detailRows.map((row, index) => (
                        <InfoFieldGroup key={index}>
                            {row.map((item) => (
                                <InfoField
                                    key={item.name ?? item.label}
                                    label={item.label}
                                    name={item.name}
                                    type={item.type}
                                    options={item.options}
                                    value={editing ? formData[item.name] : item.value}
                                    editing={editing && item.editable}
                                    onChange={handleChange}
                                />
                            ))}
                        </InfoFieldGroup>
                    ))}

                    <InfoField
                        label={section.notes.label}
                        type={section.notes.type}
                        name={section.notes.name}
                        placeholder={section.notes.placeholder}
                        value={editing ? formData[section.notes.name] : noteValue }
                        editing={editing}
                        onChange={handleChange}
                        variant="textarea"
                    />
                </div>

                {editing && (
                    <UpdateFormFooter
                        cancelLabel={page.footer_form.btn_cancel_label}
                        submitLabel={page.footer_form.btn_recorded_label}
                        onCancel={handleCancel}
                        loading={updating}
                        error={updateError}
                    />
                )}
            </form>
        </DashboardSection>
    )
}

export default JudgmentDashboardProtectedProfile;