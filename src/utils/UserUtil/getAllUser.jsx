const getAllUsers = async () => {
    try {
        const response = await fetch('https://invoice-backend-s4y6.onrender.com/api/v1/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.authToken}`,
            },
        });

        if (!response.ok) {
            throw new Error("There is some error while retrieving Users.");
        }

        const data = await response.json();

        if (!data) {
            throw new Error("Bad Auth");
        }

        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error("Error fetching users");
    }
};

export default getAllUsers;