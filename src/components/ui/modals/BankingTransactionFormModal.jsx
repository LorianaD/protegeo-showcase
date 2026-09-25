import { useEffect, useState } from "react";
import { BankingTransactionForm, Modal } from "@/components/ui";
import { addBankingTransactionForm } from "@/data";
import { useCreateBankingTransaction } from "@/hooks";

const initialFormData = {
    source_bank_account_id: "",
    destination_bank_account_id: "",
    movement_type: "",
    amount: "",
    operation_date: "",
};

function BankingTransactionFormModal({
    open,
    dossierId,
    bankAccounts,
    onClose,
    onCreated,
}) {
    const form = addBankingTransactionForm;

    const [formData, setFormData] = useState(initialFormData);

    const {
        createBankingTransaction,
        loading,
        error,
    } = useCreateBankingTransaction();

    useEffect(() => {
        if (!open) {
            return;
        }

        setFormData(initialFormData);
    }, [open]);

    if (!open) {
        return null;
    }

    const bankAccountOptions = bankAccounts.map((bankAccount) => ({
        value: bankAccount.id,
        label: bankAccount.account_label,
    }));

    const formFields = form.fields.map((field) => {
        if (
            field.name === "source_bank_account_id"
            || field.name === "destination_bank_account_id"
        ) {
            return {
                ...field,
                value: formData[field.name],
                options: bankAccountOptions,
            };
        }

        return {
            ...field,
            value: formData[field.name],
        };
    });

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

    function getBankingTransactionData() {
        return {
            source_bank_account_id: Number(
                formData.source_bank_account_id
            ),
            destination_bank_account_id: Number(
                formData.destination_bank_account_id
            ),
            movement_type: formData.movement_type,
            amount: formData.amount,
            operation_date: formData.operation_date,
        };
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const bankingTransactionData = getBankingTransactionData();

        const savedBankingTransaction =
            await createBankingTransaction(
                dossierId,
                bankingTransactionData
            );

        resetForm();
        onClose();

        if (onCreated) {
            onCreated(savedBankingTransaction);
        }
    }

    return (
        <Modal
            title={form.header.title}
            onClose={handleCancel}
        >
            <BankingTransactionForm
                form={form}
                fields={formFields}
                onChange={handleChange}
                onCancel={handleCancel}
                onSubmit={handleSubmit}
                loading={loading}
                error={error}
            />
        </Modal>
    );
}

export default BankingTransactionFormModal;