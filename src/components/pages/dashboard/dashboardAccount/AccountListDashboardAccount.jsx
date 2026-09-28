import { DashboardSection, DashboardSectionHeader, DashboardTable, ManagementAccountFormModal } from "@/components/ui";
import { addManagementAccountForm, editManagementAccountForm } from "@/data";
import { useCreateManagementAccount, useManagementAccountModal, useUpdateManagementAccount } from "@/hooks";
import { formatDate, formatManagementAccountStatus, getManagementAccountStatusVariant, getNextManagementAccountPeriod } from "@/utils";
import { useNavigate, useOutletContext, useParams } from "react-router";

function AccountListDashboardAccount() {
    const { page, dossierId, managementAccounts, selectManagementAccount, refreshManagementAccounts } = useOutletContext();

    const { reference } = useParams();
    const navigate = useNavigate();

    const section = page.accountList;

    const {
        isManagementAccountModalOpen,
        managementAccountValues,
        editingManagementAccountId,
        openCreateManagementAccountModal,
        openEditManagementAccountModal,
        closeManagementAccountModal,
        handleManagementAccountChange,
    } = useManagementAccountModal();

    const {
        updateManagementAccount,
        loading: updating,
        error: updateError,
    } = useUpdateManagementAccount();

    const {
        createManagementAccount,
        loading: creating,
        error: createError,
    } = useCreateManagementAccount();

    function handleViewAccount(managementAccountId) {
        selectManagementAccount(managementAccountId);
        navigate(`/dashboard/account/${reference}`);
    }

    function handleAddManagementAccount() {
        const suggestedPeriod =
            getNextManagementAccountPeriod(managementAccounts);

        openCreateManagementAccountModal(suggestedPeriod);
    }

    async function handleManagementAccountSubmit(event) {
        event.preventDefault();

        if (editingManagementAccountId) {
            const updatedManagementAccount = await updateManagementAccount(
                dossierId,
                editingManagementAccountId,
                {
                    start_date: managementAccountValues.start_date,
                    end_date: managementAccountValues.end_date,
                }
            );

            if (!updatedManagementAccount) {
                return;
            }
        } else {
            const createdManagementAccount = await createManagementAccount(
                dossierId,
                managementAccountValues
            );

            if (!createdManagementAccount) {
                return;
            }
        }

        closeManagementAccountModal();
        refreshManagementAccounts();
    }

    const rows = managementAccounts.map((account) => ({
        id: account.id,
        year: account.year,
        period: account.start_date && account.end_date
            ? `${formatDate(account.start_date)} au ${formatDate(account.end_date)}`
            : "Période non renseignée",
        status: formatManagementAccountStatus(account.status),
        statusVariant: getManagementAccountStatusVariant(account.status),
        sent_at: account.sent_at ? formatDate(account.sent_at) : "—",
        actions: {
            label: "Voir",
            onClick: () => handleViewAccount(account.id),
        },
        edit: {
            label: "Modifier",
            onClick: () => openEditManagementAccountModal(account),
        },
    }));

    const managementAccountForm = editingManagementAccountId
        ? editManagementAccountForm
        : addManagementAccountForm;

    const managementAccountFields = managementAccountForm.fields.map((field) => ({
        ...field,
        value: managementAccountValues[field.name] ?? "",
    }));


    return (
        <DashboardSection>
            <DashboardSectionHeader
                title={section.title}
                descriptions={section.description}
                labelBtn={section.button.label}
                variantBtn={section.button.variant}
                onClickBtn={handleAddManagementAccount}
            />
            <DashboardTable
                columns={section.columns}
                emptyMessage={section.emptyMessage}
                rows={rows}
            />

            {isManagementAccountModalOpen && (
                <ManagementAccountFormModal
                    form={managementAccountForm}
                    fields={managementAccountFields}
                    onChange={handleManagementAccountChange}
                    onClose={closeManagementAccountModal}
                    onSubmit={handleManagementAccountSubmit}
                    loading={editingManagementAccountId ? updating : creating}
                    error={editingManagementAccountId ? updateError : createError}
                />
            )}
        </DashboardSection>
    )
}

export default AccountListDashboardAccount;