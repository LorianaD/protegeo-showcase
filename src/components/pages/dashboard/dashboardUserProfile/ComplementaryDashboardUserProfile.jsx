import { DashboardSection, InfoFieldGroup, InfoField } from "@/components/ui";

function ComplementaryDashboardUserProfile({ page, user, loading }) {
    const section = page.complementary_information;
    const field = section.fields;

    if (loading) {
        return (
            <DashboardSection
                title={section.header.title}
                actionLabel={section.header.btn_label}
            >
                <p>Chargement...</p>
            </DashboardSection>
        );
    }    

    const rows = [
        [{ 
            label: field.profession.title, 
            value: user.profession || "Non renseigné",
        }],
        [{ 
            label: field.practicing.title, 
            value: user.practicing || "Non renseigné"
        }],
        [{
            label: field.roles.title,
            value: user.roles || ["Non renseigné"],
        }],
    ];

    return (
        <DashboardSection
            title={ section.header.title }
            actionLabel={ section.header.btn_label }
        >
            <div className="info-list">
                {rows.map((row, index) => (
                    <InfoFieldGroup key={index}>
                        {row.map((item) => (
                            <InfoField
                                key={item.label}
                                label={item.label}
                                value={item.value}
                            />
                        ))}
                    </InfoFieldGroup>
                ))}
            </div>
        </DashboardSection>
    )    
}

export default ComplementaryDashboardUserProfile;