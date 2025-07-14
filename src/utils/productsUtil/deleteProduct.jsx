// Function to delete a product
export const deleteProduct = async (id) => {
    try {
        const response = await fetch(`https://invoice-backend-s4y6.onrender.com/api/v1/product/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.authToken}`,
            },
        });

        if (response.ok) {
            return "Success";
        } else {            
            return "Error";
        }
    } catch (error) {
        console.error('Error deleting product:', error);
        return 'Error';
    }
};
