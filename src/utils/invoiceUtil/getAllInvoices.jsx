const getAllInvoices = async () => {
    try {
        const response = await fetch('https://invoice-backend-s4y6.onrender.com/api/v1/invoice', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.authToken}`,
            },
        });

        if (!response.ok) {
            return "Error"
        }

        const data = await response.json();

        if (!data) {
            return "Error"
        }

        return data;
    } catch (error) {
        console.error('Error fetching invoices:', error);
        return "Error"
    }
};

export default getAllInvoices;