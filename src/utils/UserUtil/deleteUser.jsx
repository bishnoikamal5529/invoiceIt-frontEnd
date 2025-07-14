// Function to delete a user
const deleteUser = async (id) => {
    try {
        const response = await fetch(`https://invoice-backend-s4y6.onrender.com/api/v1/user/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.authToken}`,
            },
        });

        if (response.status == 200) {
            return "User Successfully Deleted.";
        } else {
            return "Error";
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        return 'Error';
    }
};

export default deleteUser ;
