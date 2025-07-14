// Function to create a customer
const createCustomer = async (data) => {
    let customerData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
    };

    try {
        const response = await fetch('https://invoice-backend-s4y6.onrender.com/api/v1/customer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.authToken}`,
            },
            body: JSON.stringify(customerData),
        });
             
        if (response.status == 201) {
            return 'Customer Successfully Created.';
        } else {
            return 'Error';
        }
    } catch (error) {
        console.error('Error creating customer:', error);
        return 'Error';
    }
};

export default createCustomer;
