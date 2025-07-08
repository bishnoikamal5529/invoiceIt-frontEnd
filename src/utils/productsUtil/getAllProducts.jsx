const getAllProducts = async () => {
    try {
        const response = await fetch('https://invoice-backend-s4y6.onrender.com/api/v1/product', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.authToken}`,
            },
        });


        if (!response.ok) {
            errorString = "There is some error while retrieving Products."
        }

        const data = await response.json();

        if(!data){
            errorString = "Bad Auth";
        }
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        errorString =  "Error fetching products";
    }
};

export default getAllProducts;