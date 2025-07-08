const LoginUtil = async (userData) => {
    try {
        const response = await fetch('https://invoice-backend-s4y6.onrender.com/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const data = await response.json();

        if (response.ok && data.success) {
            const authToken = data.authToken;
            localStorage.setItem('authToken', authToken);
            console.log('login successful.');
            return "login successful."
        } else {
            console.error('login failed.');
            return "login failed."
        }
    } catch (error) {
        console.error('Error during login:', error);
        return "Error during login"

    }   
};

export default LoginUtil;