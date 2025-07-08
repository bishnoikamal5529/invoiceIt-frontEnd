const SignupUtil = async (userData) => {
    try {        
        const response = await fetch('https://invoice-backend-s4y6.onrender.com/api/v1/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.log(errorData);            
            if(errorData.msg.startsWith("E11000")){
                return "There is already an account with this email";
            }
            return errorData.msg || 'An error occurred during signup.';
        }
        const data = await response.json();
        localStorage.setItem('authToken', data.authToken);
        return "Sign Up Successfull."
    } catch (error) {
        console.error('Error during user signup:', error);
        return 'An unexpected error occurred during signup.';
    }
};

export default SignupUtil;