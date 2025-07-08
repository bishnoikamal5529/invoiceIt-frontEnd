// Function to delete a user
const deleteUser = async (id) => {
    try {
        const response = await fetch(`https://invoice-backend-s4y6.onrender.com/api/v1/user/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.authToken}`,
            },
        });

        let result = await response.json();
        if (result.success) {
            console.log(result.message);
            return "User Successfully Deleted.";
        } else {
            return "Error Deleting the User.";
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        return 'There is some error. Please try again.';
    }
};

export default deleteUser ;
