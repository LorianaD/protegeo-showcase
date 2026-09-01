import { useState } from "react";
import { Modal, TransactionForm } from "@/components/ui";
import { addTransactionForm, options } from "@/data";
import { useCreateTransaction } from "@/hooks";

function TransactionFormModal({ open, transactionType, dossierId, managementAccountId, bankAccountOptions = [], onClose, onCreated }) {
    const form = addTransactionForm[transactionType];

    const [formData, setFormData] = useState({
        bank_account_id: "",
        category_type: "",
        label: "",
        amount: "",
        operation_date: "",
        payment_method: "",
    });

    const { createTransaction, loading, error } = useCreateTransaction();

    if (!open || !form) {
        return null;
    }

    const categoryOptions = transactionType === "resource"
        ? options.transaction_resource_categories
        : options.transaction_expense_categories;

    const formFields = form.fields.map((field) => {
        if (field.name === "category_type") {
            return {
                ...field,
                value: formData[field.name],
                options: categoryOptions,
            };
        }

        if (field.name === "bank_account_id") {
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

    function getSelectedCategory() {
        return categoryOptions.find(
            (category) => category.value === formData.category_type
        );
    }

    function resetForm() {
        setFormData({
            bank_account_id: "",
            category_type: "",
            label: "",
            amount: "",
            operation_date: "",
            payment_method: "",
        });
    }

    function handleCancel() {
        resetForm();
        onClose();
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const selectedCategory = getSelectedCategory();

        if (!selectedCategory) {
            return;
        }

        const transactionData = {
            transaction_type: transactionType,
            category_group: selectedCategory.group,
            category_type: formData.category_type,
            label: formData.label,
            amount: formData.amount,
            operation_date: formData.operation_date,
            payment_method: formData.payment_method || null,
            bank_account_id: formData.bank_account_id
                ? Number(formData.bank_account_id)
                : null,
        };

        const transaction = await createTransaction(
            dossierId,
            managementAccountId,
            transactionData
        );

        resetForm();
        onClose();

        if (onCreated) {
            onCreated(transaction);
        }
    }

    return (
        <Modal
            title={form.header.title}
            onClose={handleCancel}
        >
            <TransactionForm
                form={form}
                fields={formFields}
                onChange={handleChange}
                onCancel={handleCancel}
                onSubmit={handleSubmit}
                cancelLabel={form.actions.cancel}
                submitLabel={form.actions.submit}
                loading={loading}
                error={error}
            />
        </Modal>
    );
}

export default TransactionFormModal;