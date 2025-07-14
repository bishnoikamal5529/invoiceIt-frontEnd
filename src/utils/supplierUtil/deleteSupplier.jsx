// Function to delete a supplier
const deleteSupplier = async (id) => {
    try {
        const response = await fetch(`https://invoice-backend-s4y6.onrender.com/api/v1/supplier/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.authToken}`,
            },
        });        
        if (!response.ok) {
            return "Error";
        } else {
            return "Success";
        }
    } catch (error) {
        console.error('Error deleting supplier:', error);
        return 'Error';
    }
};

export default deleteSupplier;