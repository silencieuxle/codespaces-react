import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function HomePage() {
    return (
        <Row>
            <Col xs={{span: 4, offset: 4}}>
                <Image src='/Octocat.png' fluid />
            </Col>
        </Row>
    )
}

export default HomePage;