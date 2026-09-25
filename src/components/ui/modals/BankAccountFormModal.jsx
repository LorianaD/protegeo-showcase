import { useEffect, useState } from "react";
import { BankAccountForm, Modal } from "@/components/ui";
import { addBankAccountForm } from "@/data";
import { useCreateBankAccount, useUpdateBankAccount } from "@/hooks";

const initialFormData = {
    bank_name: "",
    agency_name: "",
    account_type: "",
    account_label: "",
    account_number: "",
    opened_at: "",
    initial_balance: "",
};

function BankAccountFormModal({open, dossierId, bankAccount, onClose, onCreated}) {
    const form = addBankAccountForm;
    const isEditing = Boolean(bankAccount);

    const header = isEditing ? form.header.update : form.header.create;

    const [formData, setFormData] = useState(initialFormData);

    const {
        createBankAccount,
        loading: createLoading,
        error: createError,
    } = useCreateBankAccount();

    const {
        updateBankAccount,
        loading: updateLoading,
        error: updateError,
    } = useUpdateBankAccount();

    useEffect(() => {
        if (!open) {
            return;
        }

        if (!bankAccount) {
            setFormData(initialFormData);
            return;
        }

        setFormData({
            bank_name: bankAccount.bank_name ?? "",
            agency_name: bankAccount.agency_name ?? "",
            account_type: bankAccount.account_type ?? "",
            account_label: bankAccount.account_label ?? "",
            account_number: "",
            opened_at: bankAccount.opened_at ?? "",
            initial_balance: bankAccount.initial_balance ?? "",
        });
    }, [open, bankAccount]);

    if (!open) {
        return null;
    }

    const formFields = form.fields.map((field) => {
        if (field.name === "account_number" && isEditing) {
            return {
                ...field,
                value: formData[field.name],
                required: false,
            };
        }

        return {
            ...field,
            value: formData[field.name],
        };
    });

    const loading = createLoading || updateLoading;
    const error = createError || updateError;

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((previousFormData) => ({
            ...previousFormData,
            [name]: value,
        }));
    }

    function resetForm() {
        setFormData(initialFormData);
    }

    function handleCancel() {
        resetForm();
        onClose();
    }

    function getBankAccountData() {
        const bankAccountData = {
            bank_name: formData.bank_name,
            agency_name: formData.agency_name,
            account_type: formData.account_type,
            account_label: formData.account_label,
            opened_at: formData.opened_at,
            initial_balance: formData.initial_balance,
        };

        if (formData.account_number.trim() !== "") {
            bankAccountData.account_number = formData.account_number;
        }

        return bankAccountData;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const bankAccountData = getBankAccountData();

        const savedBankAccount = isEditing
            ? await updateBankAccount(
                dossierId,
                bankAccount.id,
                bankAccountData
            )
            : await createBankAccount(
                dossierId,
                bankAccountData
            );

        resetForm();
        onClose();

        if (onCreated) {
            onCreated(savedBankAccount);
        }
    }

    return (
        <Modal
            title={header.title}
            onClose={handleCancel}
        >
            <BankAccountForm
                form={form}
                fields={formFields}
                onChange={handleChange}
                onCancel={handleCancel}
                onSubmit={handleSubmit}
                cancelLabel={form.actions.cancel}
                submitLabel={isEditing ? form.actions.update : form.actions.submit}
                loading={loading}
                error={error}
            />
        </Modal>
    );
}

export default BankAccountFormModal;