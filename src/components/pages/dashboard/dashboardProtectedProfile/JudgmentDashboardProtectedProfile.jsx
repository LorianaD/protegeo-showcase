import { DashboardSection, InfoFieldGroup, InfoField, DashboardSectionLoading } from "@/components/ui";
import { useCurrentMeasure, useDossier } from "@/hooks";
import { useOutletContext } from "react-router";

function JudgmentDashboardProtectedProfile () {
    const { page, dossierId } = useOutletContext();
    
    const section = page.judgment;
    const rows = section.details;

    const { dossier, loading: dossierLoading, error: dossierError, refreshDossier } = useDossier(dossierId);
    const { measure, loading: measureLoading, error: measureError, refreshMeasure } = useCurrentMeasure(dossierId);

    const loading = dossierLoading || measureLoading;
    const error = dossierError || measureError;

    if (loading) {
        return (
            <DashboardSectionLoading section={section} page={page}/>
        );
    }

    if (error) {
        return (
            <DashboardSection title={section.header.title}>
                <p>{error}</p>
            </DashboardSection>
        )
    }

    if (!dossier) {
        return (
            <DashboardSection title={section.header.title}>
                <p>Aucun dossier trouvé.</p>
            </DashboardSection>
        )
    }

    const detailRows = rows.map((row) =>
        row.map((item) => ({
            ...item,
            value:
                dossier?.[item.name] ?? measure?.[item.name] ?? "Non renseigné",
        }))
    );

    return (
        <DashboardSection title={section.header.title}>
            <form className="update-form">
                <div className="info-list">
                    {detailRows.map((row, index) => (
                        <InfoFieldGroup key={index}>
                            {row.map((item) => (
                                <InfoField
                                    key={item.name ?? item.label}
                                    label={item.label}
                                    name={item.name}
                                    type={item.type}
                                    value={
                                        // editing
                                        //     ? formData[item.name]
                                            item.value
                                    }
                                    // editing={editing}
                                    // onChange={handleChange}
                                />
                            ))}
                        </InfoFieldGroup>
                    ))}
                </div>

                {/* {editing && (
                    <UpdateFormFooter
                        cancelLabel={section.footer.btn_cancel_label}
                        submitLabel={section.footer.btn_recorded_label}
                        onCancel={handleCancel}
                        loading={updating}
                        error={updateError}
                    />
                )} */}
            </form>
        </DashboardSection>
    )
}

export default JudgmentDashboardProtectedProfile;