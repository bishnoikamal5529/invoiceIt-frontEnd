
// Function to create a product
export const createProduct = async (data) => {

    let productData = {
            name: data.name,
            sku: data.sku,
            price: parseFloat(data.price),
            quantityInStock: parseInt(data.quantityInStock),
            category:data.category,
            supplier:data.supplier
    }

    try {
        console.log(JSON.stringify(productData));
        
        const response = await fetch('https://invoice-backend-s4y6.onrender.com/api/v1/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.authToken}`,
            },
            body: JSON.stringify(productData),
        });

        let product = await response.json();
        if(product.success){
            console.log(product.data);
            return "Product Successfully Created."
        }else{
            return "Error";
        }

    } catch (error) {
        console.error('Error creating product:', error);
        return "Error";        
    }
};
