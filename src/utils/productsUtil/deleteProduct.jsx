// Function to delete a product
export const deleteProduct = async (id) => {
    try {
        const response = await fetch(`https://invoice-backend-s4y6.onrender.com/api/v1/product/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.authToken}`,
            },
        });

        let result = await response.json();
        if (result.success) {
            console.log(result.message);
            return "Product Successfully Deleted.";
        } else {
            return "Error Deleting the Product.";
        }
    } catch (error) {
        console.error('Error deleting product:', error);
        return 'There is some error. Please try again.';
    }
};
