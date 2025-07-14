// Function to create an invoice
export const createInvoice = async (data) => {
    let invoiceData = {
        invoiceNumber: data.invoiceNumber,
        customerName: data.customerName,
        customerEmail: data.customerEmail,
        items: data.itemsList, // Array of items, each item includes productId and quantity
        totalAmount: parseFloat(data.totalAmount).toFixed(2),
        status: data.status, // Paid, Unpaid, Overdue
        issueUser: data.issueUser, // User ID
    };

    try {
        console.log(JSON.stringify(invoiceData));        
        const response = await fetch('https://invoice-backend-s4y6.onrender.com/api/v1/invoice', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.authToken}`,
            },
            body: JSON.stringify(invoiceData),
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
        console.error('Error creating invoice:', error);
        return "Error";
    }
};
