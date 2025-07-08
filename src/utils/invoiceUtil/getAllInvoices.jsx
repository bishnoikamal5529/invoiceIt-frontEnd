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
            throw new Error("There is some error while retrieving invoices.");
        }

        const data = await response.json();

        if (!data) {
            throw new Error("Bad Auth");
        }

        return data;
    } catch (error) {
        console.error('Error fetching invoices:', error);
        throw new Error("Error fetching invoices");
    }
};

export default getAllInvoices;