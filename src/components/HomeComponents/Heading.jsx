import {Row, Col} from 'react-bootstrap'

const Heading = () => {
  return (
    <Row className="mb-4">
            <Col>
                <h1 className="display-4">
                    <span className='text-primary-emphasis'>Invoice</span>
                    <span className='text-danger'>It</span>
                </h1>
                <p className="lead">
                    Track products, suppliers, and invoices effortlessly. Generate invoices in seconds. Completely free!
                </p>
            </Col>
    </Row>
  );
};

export default Heading;