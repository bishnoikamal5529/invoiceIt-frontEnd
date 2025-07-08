// Function to delete a customer
const deleteCustomer = async (id) => {
    try {
        const response = await fetch(`https://invoice-backend-s4y6.onrender.com/api/v1/customer/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.authToken}`,
            },
        });

        let result = await response.json();
        if (result.success) {
            console.log(result.message);
            return "Customer Successfully Deleted.";
        } else {
            return "Error Deleting the Customer.";
        }
    } catch (error) {
        console.error('Error deleting customer:', error);
        return 'There is some error. Please try again.';
    }
};

export default deleteCustomer;
