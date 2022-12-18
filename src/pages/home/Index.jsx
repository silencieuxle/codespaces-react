import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import useAuth from '../../providers/AuthHook';

function HomePage() {
    let auth = useAuth();
    let message = auth.isAuthenticated ? "click on Messages navigation link" : "Login";
    return (
        <Row>
            <Col xs={{span: 4, offset: 4}}>
                <Image src='/Octocat.png' fluid className='mt-5' />
                <h2 className='text-center mt-5'>Hello, please {message} to get started!</h2>
            </Col>
        </Row>
    )
}

export default HomePage;