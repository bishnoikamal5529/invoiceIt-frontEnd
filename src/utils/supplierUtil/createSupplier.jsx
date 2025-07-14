// Function to create a supplier
export const createSupplier = async (data) => {

    let supplierData = {
        name: data.name,
        contactPerson: data.contactPerson,
        phone: data.phone,
        email: data.email,
        address: data.address,
        notes: data.notes,
    };

    try {
        console.log(JSON.stringify(supplierData));
        
        const response = await fetch('https://invoice-backend-s4y6.onrender.com/api/v1/supplier', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.authToken}`,
            },
            body: JSON.stringify(supplierData),
        });

        if (response.ok) {
            return "Success";
        } else {
            return "Error";
        }

    } catch (error) {
        console.error('Error creating supplier:', error);
        return 'Error';
    }
};
