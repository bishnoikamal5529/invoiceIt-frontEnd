// Function to delete a customer
const deleteCustomer = async (id) => {
    try {
        const response = await fetch(`https://invoice-backend-s4y6.onrender.com/api/v1/customer/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.authToken}`,
            },
        });

        if (response.status == 200) {
            return "Customer Successfully Deleted.";
        } else {
            return "Error";
        }
    } catch (error) {
        console.error('Error deleting customer:', error);
        return 'Error';
    }
};

export default deleteCustomer;
