
import { Accordion, Button } from 'react-bootstrap';
import guestLogin from '../../utils/GuestLogin';

const GuestLoginWarning = ({setMsgLoading, setNavLinks}) => {

    async function handleGuestLogin(){
        setMsgLoading("Spinner");        
        guestLogin().then((res) => {
            setMsgLoading(res);
            setNavLinks(true);
        })

        setTimeout(() => {
            setMsgLoading(false);
        }, 10000)
    }

    return (
        <Accordion defaultActiveKey="0" className='mb-4 font-monospace'>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Continue as Guest-Admin
          </Accordion.Header>
          <Accordion.Body>
            <p>
            You need to login to see all the pages. Either you can create
            a new account or use "Login as Guest-Admin" to continue with admin 
            level authority.
            </p>
            <Button
                variant='outline-dark'
                onClick={handleGuestLogin}
            >
                Login as Guest-Admin
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };
  
  export default GuestLoginWarning;