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
        
        console.log(response);
        
        if (!response.ok) {
            return "Error";
        }

        const data = await response.json();

        if (!data) {
            return "Error";
        }        
        return data;
    } catch (error) {
        console.error('Error updating supplier:', error);
        return "Error";
    }
};

export default updateSupplier;