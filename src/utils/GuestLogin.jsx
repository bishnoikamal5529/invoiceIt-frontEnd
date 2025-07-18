const guestLogin = async () => {
    try {
        const response = await fetch('https://invoice-backend-s4y6.onrender.com/api/v1/auth/guest', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        if (response.ok && data.success) {
            const authToken = data.authToken;
            localStorage.setItem('authToken', authToken);
            return "Success"
        } else {
            console.error('Guest login failed.');
            return "Error"
        }
    } catch (error) {
        console.error('Error during guest login:', error);
        return "Error"

    }   
};

export default guestLogin;