const updateCustomer = async (id, updatedCustomerData) => {
    try {
        const response = await fetch(`https://invoice-backend-s4y6.onrender.com/api/v1/customer/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.authToken}`,
            },
            body: JSON.stringify({
                name: updatedCustomerData.name,
                email: updatedCustomerData.email,
                phone: updatedCustomerData.phone,
                address: updatedCustomerData.address,
            }),
        });

        if (!response.ok) {
            return "Error";
        }

        const data = await response.json();

        if (!data) {
            return "Error";
        }        
        return data;
    } catch (error) {
        console.error('Error updating product:', error);
        return "Error";
    }
};

export default updateCustomer;
