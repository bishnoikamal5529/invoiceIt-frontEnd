const updateUser = async (id, updatedUserData) => {
    try {
        const response = await fetch(`https://invoice-backend-s4y6.onrender.com/api/v1/user/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.authToken}`,
            },
            body: JSON.stringify({
                name: updatedUserData.name,
                email: updatedUserData.email,
                role: updatedUserData.role,
                phone: updatedUserData.phone,
            }),
        });
        
        
        if (!response.ok) {
            return "Error";
        }

        const data = await response.json();
        
        if (!data) {
            return "Error";
        }        
        return data;
    } catch (error) {
        console.error('Error updating User:', error);
        return "Error";
    }
};

export default updateUser;