import { useState, useEffect } from 'react';
import UserList from '../components/UserComponents/UserList.jsx';
import { Alert, Button, Spinner } from 'react-bootstrap';
import UpdateUserForm from '../components/UserComponents/UpdateUserForm.jsx';
import getAllUser from '../utils/UserUtil/getAllUser.jsx';
import deleteUser  from '../utils/UserUtil/deleteUser.jsx';

const UserPage = () => {
    const [users, setUsers] = useState(null);
    const [errorMsg, setErrorMsg] = useState(false);
    const [activeUpdate, setActiveUpdate] = useState(null);

    useEffect(() => {
        let ignore = true;

        if (!activeUpdate) {
            let errorString = null;
            console.log("Running user effect to reload users");

            if (!localStorage.authToken) {
                ignore = false;
                setErrorMsg("You need to login again.");
            }
            const fetchUsers = async () => {
                try {
                    const response = await fetch('https://invoice-backend-s4y6.onrender.com/api/v1/user', {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${localStorage.authToken}`,
                        },
                    });

                    if (!response.ok) {
                        errorString = "There is some error while retrieving Users.";
                    }

                    const data = await response.json();

                    if (!data) {
                        errorString = "Bad Auth";
                    }
                    return data;
                } catch (error) {
                    console.error('Error fetching users:', error);
                    errorString = "Error fetching users";
                }
            };

            if(errorMsg){
                updateErrorMsg(errorMsg + " Updating Users...");
            }
            else{
                updateErrorMsg("Updating Users...");
            }
            setTimeout(() => {
                fetchUsers().then(entity => {
                    console.log(entity);
                    let newList = [];
                    if (ignore) {
                        for (let i = 0; i < entity.length; i++) {
                            newList[i] = entity[i];
                            newList[i].id = i + 1;
                        }

                        setUsers(newList);
                    }
                });
            }, 1000);

            return () => {
                ignore = false;
            };
        }
    }, [activeUpdate]);

    const updateErrorMsg = (msg) => {
        setErrorMsg(msg);
        setTimeout(() => {
            setErrorMsg(false);
        },5000)
    }

    const handleUpdate = (user) => {
        console.log(user);
        if (user) {
            let defaultValues = {
                _id: user._id,
                name: user.name,
                email: user.email,
                password: user.password,
                role: user.role,
                phone: user.phone,
                isActive: user.isActive,
            };
            if (defaultValues) {
                setActiveUpdate(defaultValues);
            }
        }
    };

    const handleRefresh = () => {        
        getAllUser().then(entity => {
            console.log(entity);
            let newList = [];
            if (entity) {
                for (let i = 0; i < entity.length; i++) {
                    newList[i] = entity[i];
                    newList[i].id = i + 1;
                }

                setUsers(newList);
            }
        });
    };

    const handleDelete = async (id) => {
        const res = await deleteUser(id);
        if(res == 'Success'){
            setTimeout(handleRefresh, 1000);
        }
        else{                        
            updateErrorMsg("Something went wrong while deleting the User. Please referesh the page, login again or try again later.");
        }
    };

    return (
        <div>
            {
                errorMsg && <Alert className='w-75 text-center mx-auto mt-4' variant='danger'>
                    {errorMsg}
                </Alert>
            }
            {
                activeUpdate ? <UpdateUserForm 
                                    defaultValues={activeUpdate} 
                                    onCancel={() => setActiveUpdate(!activeUpdate)} 
                                    updateErrorMsg={updateErrorMsg} />
                : <div className='w-100 d-flex justify-content-center flex-column'>
                    {
                        users ?
                            <UserList users={users} handleUpdate={handleUpdate} handleDelete={handleDelete} updateErrorMsg={updateErrorMsg} handleRefresh={handleRefresh} /> :
                            <Spinner className='my-5 mx-auto' animation="border" variant="dark" />
                    }
                    <Button variant="dark" className='w-25 m-auto' onClick={handleRefresh}>
                        Refresh List
                    </Button>
                </div>
            }
        </div>
    );
};

export default UserPage;
