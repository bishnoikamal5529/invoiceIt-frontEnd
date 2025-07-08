const getAllSuppliers = async () => {
    try {
        const authToken = localStorage.getItem('authToken'); // Retrieve authToken from localStorage
        const response = await fetch('https://invoice-backend-s4y6.onrender.com/api/v1/supplier', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`, // Add Authorization header
            },
        });
        if (!response.ok) {
            return `HTTP error! status: ${response.status}`;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching supplier list:', error);
        return `Error fetching supplier list: ${error.message}`;
    }
};

export default getAllSuppliers;