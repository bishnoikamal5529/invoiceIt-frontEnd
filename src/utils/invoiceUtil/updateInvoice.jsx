const updateInvoice = async (id, updatedInvoiceData) => {
    // extract updating data
    const updateData = {
        status : updatedInvoiceData.status
    }
    try {
        const response = await fetch(`https://invoice-backend-s4y6.onrender.com/api/v1/invoice/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.authToken}`,
            },
            body: JSON.stringify(updateData),
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
        console.error('Error updating invoice:', error);
        return "Error";
    }
};

export default updateInvoice;