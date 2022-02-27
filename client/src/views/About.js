import Button from "react-bootstrap/esm/Button"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const About = () => {
    return (
        <Row className='mt-5' styles={{marginRight: 10}}>
            <Col className='text-center'>
                <Button 
                    variant='primary'
                    href='https://www.facebook.com/profile.php?id=100009368295513'
                    size='lg'
                >
                    Visit my facebook to know more about me
                </Button>    
            </Col>
        </Row>
    )
}

export default About
