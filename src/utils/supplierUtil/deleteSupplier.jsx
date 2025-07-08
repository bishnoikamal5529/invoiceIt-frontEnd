// Function to delete a supplier
const deleteSupplier = async (id) => {
    try {
        const response = await fetch(`https://invoice-backend-s4y6.onrender.com/api/v1/supplier/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.authToken}`,
            },
        });

        let result = await response.json();
        if (result.success) {
            console.log(result.message);
            return "Supplier Successfully Deleted.";
        } else {
            return "Error Deleting the Supplier.";
        }
    } catch (error) {
        console.error('Error deleting supplier:', error);
        return 'There is some error. Please try again.';
    }
};

export default deleteSupplier;