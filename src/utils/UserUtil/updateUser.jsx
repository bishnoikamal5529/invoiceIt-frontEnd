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
                password: updatedUserData.password,
                role: updatedUserData.role,
                phone: updatedUserData.phone,
            }),
        });

        if (!response.ok) {
            return "There is some error while updating the User.";
        }

        const data = await response.json();

        if (!data) {
            return "Bad Auth";
        }
        return data;
    } catch (error) {
        console.error('Error updating user:', error);
        return "Error updating user";
    }
};

export default updateUser;