// Function to create a customer
const createCustomer = async (data) => {
    let customerData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
    };

    try {
        console.log(JSON.stringify(customerData));

        const response = await fetch('https://invoice-backend-s4y6.onrender.com/api/v1/customer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.authToken}`,
            },
            body: JSON.stringify(customerData),
        });

        let customer = await response.json();        
        if (customer) {
            console.log(customer.data);
            return 'Customer Successfully Created.';
        } else {
            return 'Error Creating a Customer';
        }
    } catch (error) {
        console.error('Error creating customer:', error);
        return 'There is some error. Please try again.';
    }
};

export default createCustomer;
