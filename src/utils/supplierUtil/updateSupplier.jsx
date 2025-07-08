const updateSupplier = async (id, updatedSupplierData) => {
    try {
        const response = await fetch(`https://invoice-backend-s4y6.onrender.com/api/v1/supplier/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.authToken}`,
            },
            body: JSON.stringify(updatedSupplierData),
        });

        if (!response.ok) {
            return "There is some error while updating the Supplier.";
        }

        const data = await response.json();

        if (!data) {
            return "Bad Auth";
        }
        return data;
    } catch (error) {
        console.error('Error updating supplier:', error);
        return "Error updating supplier";
    }
};

export default updateSupplier;