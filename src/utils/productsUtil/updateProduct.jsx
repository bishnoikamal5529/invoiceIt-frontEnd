const updateProduct = async (id, updatedProductData) => {
    try {
        const response = await fetch(`https://invoice-backend-s4y6.onrender.com/api/v1/product/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.authToken}`,
            },
            body: JSON.stringify(updatedProductData),
        });

        if (!response.ok) {
            return "There is some error while updating the Product.";
        }

        const data = await response.json();

        if (!data) {
            return "Bad Auth";
        }
        return data;
    } catch (error) {
        console.error('Error updating product:', error);
        return "Error updating product";
    }
};

export default updateProduct;