import { DashboardSection, InfoFieldGroup, InfoField } from "@/components/ui";

function UsernameDashboardUserProfile({ page, user, loading }) {
    const section = page.username;
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
            label: field.email.title, 
            value: user.email || "Non renseigné",
        }],
        [{ 
            label: field.password.title, 
            value: "••••••••••••",
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

export default UsernameDashboardUserProfile;