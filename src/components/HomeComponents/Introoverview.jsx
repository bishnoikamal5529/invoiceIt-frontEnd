import {Row, Card} from 'react-bootstrap'

const Introoverview = () => {
  return <Row className='m-3'>
                <Card
                    className='shadow-lg w-100'
                    bg='light'
                    key='light'
                    text= 'Information'
                    style={{ width: '18rem' }}
                    >
                    <Card.Header>Overview</Card.Header>
                    <Card.Body className=''>
                        <Card.Title>Invoice. Track. Manage</Card.Title>
                        <Card.Text>
                        A powerful web application to manage your business invoicing with ease.
                        Track products, invoices, customers, and suppliers in one place.
                        Secure user authentication with JWT, role-based access control, and a 
                        streamlined login/signup system ensure data stays protected.
                        Simplify your operations with smart tools designed for efficiency.
                        </Card.Text>
                    </Card.Body>
                    </Card>
        </Row>
};

export default Introoverview;