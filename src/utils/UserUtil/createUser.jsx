// Function to create a user
const createUser = async (data) => {
    let userData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role, // Must be one of 'staff', 'admin', 'manager'
        phone: data.phone,
    };

    try {
        console.log(JSON.stringify(userData));

        const response = await fetch('https://invoice-backend-s4y6.onrender.com/api/v1/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.authToken}`,
            },
            body: JSON.stringify(userData),
        });
        
        if (response.status == 201) {
            return 'User Successfully Created.';
        } else {
            return 'Error';
        }
    } catch (error) {
        console.error('Error creating User:', error);
        return 'Error';
    }
};

export default createUser;