import { DashboardSection, InfoField, InfoFieldGroup } from "@/components/ui";

function IdentifyDashboardUserProfile({ page, user, loading }) {
    const field = page.identify.fields;

    if (loading || !user) {
        return (
            <DashboardSection
                title={page.identify.header.title}
                actionLabel={page.identify.header.btn_label}
            >
                <p>Chargement...</p>
            </DashboardSection>
        );
    }

    const rows = [
        [
            { 
                label: field.lastname.title, 
                value: user.lastname },
            { 
                label: field.firstname.title, 
                value: user.firstname 
            },
        ],
        [
            { 
                label: field.birthdate.title, 
                value: user.birthdate || "Non renseigné" 
            },
            { 
                label: field.birthplace.title, 
                value: user.birthplace || "Non renseigné" 
            },
            { 
                label: field.nationality.title, 
                value: user.nationality || "Non renseigné" 
            },
        ],
        [
            {
                label: field.address.title,
                value: [
                    user.address,
                    `${user.postal_code} ${user.city}`,
                ] || "Non renseigné",
            },
        ],
        [
            { 
                label: field.phone_number.title, 
                value: user.phone_number || "Non renseigné"
            },
            { 
                label: field.email.title, 
                value: user.email 
            },
        ],
    ];

    return (
        <DashboardSection
            title={ page.identify.header.title }
            actionLabel={ page.identify.header.btn_label }
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

export default IdentifyDashboardUserProfile;